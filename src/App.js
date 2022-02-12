import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";

import {
  Epic, 
  View, 
  Root, 
  ModalRoot, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM
} from "@vkontakte/vkui";

import HomePanelBase from './js/panels/home/base';
import HomePanelEditor from './js/panels/home/editor';
import HomePanelViewingArticle from './js/panels/home/viewingArticle';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import Articles from './js/components/modals/Articles';
import Publication from './js/components/modals/Publication';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform()
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  render() {
    const {goBack, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { Platform } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot popout={popout} activeModal={activeModal}>
        <HomeBotsListModal
          id="MODAL_PAGE_BOTS_LIST"
          onClose={() => closeModal()}
        />
        <Articles
          id="MODAL_PAGE_ARTICLES"
          onClose={() => closeModal()}
          dynamicContentHeight
        />
        <Publication
          id="MODAL_PAGE_PUBLICATION"
          onClose={() => closeModal()}
          dynamicContentHeight
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true} webviewType="internal">
        <AdaptivityProvider>
          <AppRoot>
            <Epic activeStory={activeStory}>
              <Root id="home" activeView={activeView} popout={popout}>
                <View
                  id="home"
                  modal={homeModals}
                  activePanel={getActivePanel("home")}
                  history={history}
                  onSwipeBack={() => goBack()}
                >
                  <HomePanelBase id="base" withoutEpic={false} platform={Platform} />
                  <HomePanelEditor id="editor" platform={Platform} />
                  <HomePanelViewingArticle id="viewingArticle" platform={Platform} />
                </View>
              </Root>
            </Epic>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);