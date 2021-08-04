import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Div, 
    Panel,
    Alert,
    Group,
    Button,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton,
    ScreenSpinner,
    Snackbar,
    Avatar,
    Gradient,
    Title,
    Text,
    Tabs,
    TabsItem,
    Search,
    Spacing,
    ActionSheetItem,
    ActionSheet,
    platform,
    IOS,
    IconButton,
    Placeholder,
    Counter
} from '@vkontakte/vkui'
import {
    Icon16ChevronOutline,
    Icon16Done,
    Icon16Dropdown,
    Icon20ArticlesOutline,
    Icon24ArticleOutline,
    Icon24Filter,
    Icon24MoreHorizontal,
    Icon28BookmarkOutline,
    Icon28DeleteOutline,
    Icon28DeleteOutlineAndroid,
    Icon28HideOutline,
    Icon28PinOutline,
    Icon28UnfavoriteOutline,
    Icon28UnpinOutline,
    Icon28UserAddedOutline
} from '@vkontakte/icons'

class HomePanelBase extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showImg: false,
            activeTab: 'published',
            popout: null
        }
        this.openInteractionArticles = this.openInteractionArticles.bind(this);
        this.openInteractionArticlesNo = this.openInteractionArticlesNo.bind(this);
        this.openInteractionSub = this.openInteractionSub.bind(this);
        this.iconsTargetRef = React.createRef();
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
                header='Вопрос значит'
                text='Вас роняли в детстве?'
            />
        );
    }

    async openSpinner() {
        this.props.openPopout(<ScreenSpinner/>)
        await this.sleep(2500)
        this.props.closePopout()
    }

    openSnackbar() {
        this.props.openPopout(
            <Snackbar
                layout='vertical'
                onClose={() => this.props.closePopout()}
                action='Например кнопка'
                before={<Avatar size={24} style={{ background: 'var(--accent)' }}> <Icon16Done fill='#fff' width={14} height={14}/> </Avatar>}
            >
                Какой-то текст
            </Snackbar>
        );
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    openInteractionArticles() {
        this.props.openPopout(
            <ActionSheet 
                onClose={() => this.props.closePopout()}
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                toggleRef={this.iconsTargetRef.current}
            >
                <ActionSheetItem autoclose before={<Icon28BookmarkOutline/>}>
                    Сохранить в закладках
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28HideOutline/>}>
                    Скрыть со страницы статей
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28PinOutline/>}>
                    Закрепить в списке статей
                </ActionSheetItem>
                <ActionSheetItem
                    autoclose
                    before={platform === IOS ? <Icon28DeleteOutline/> : <Icon28DeleteOutlineAndroid />}
                    mode="destructive"
                >
                    Удалить статью
                </ActionSheetItem>
            </ActionSheet>
        );
    }

    openInteractionArticlesNo() {
        this.props.openPopout(
            <ActionSheet 
                onClose={() => this.props.closePopout()}
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                toggleRef={this.iconsTargetRef.current}
            >
                <ActionSheetItem autoclose before={<Icon28UnfavoriteOutline/>}>
                    Удалить из закладок
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28HideOutline/>}>
                    Скрыть со страницы статей
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28UnpinOutline/>}>
                    Открепить
                </ActionSheetItem>
                <ActionSheetItem
                    autoclose
                    before={platform === IOS ? <Icon28DeleteOutline/> : <Icon28DeleteOutlineAndroid />}
                    mode="destructive"
                >
                    Удалить статью
                </ActionSheetItem>
            </ActionSheet>
        );
    }

    openInteractionSub() {
        this.props.openPopout(
            <ActionSheet 
                onClose={() => this.props.closePopout()}
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                toggleRef={this.iconsTargetRef.current}
            >
                <ActionSheetItem autoclose>
                    Отписаться
                </ActionSheetItem>
            </ActionSheet>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={
                        <React.Fragment>
                            <PanelHeaderBack />
                            <PanelHeaderButton><Avatar src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album" size={36} /></PanelHeaderButton>
                            <PanelHeaderButton><Icon16Dropdown /></PanelHeaderButton>
                        </React.Fragment>
                    }
                    separator={false}
                    style={{zIndex: 1}}
                >
                </PanelHeader>
                <Group>
                <Gradient style={{
                    margin: ['-59px -7px 0px -7px'],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: ['36px 0 24px']
                }}>
                    <Avatar src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album" size={80} />
                    <div style={{display: "flex"}}>
                        <Title style={{fontSize: '18px', marginBottom: 0, marginTop: 12, cursor: "pointer" }} level="2" weight="medium">SkyReglis Stydio</Title>
                        <IconButton><Icon16ChevronOutline style={{marginLeft: "-12px", color: "var(--accent)"}} /></IconButton>
                    </div>
                    <Text style={{ fontSize: '13px', marginBottom: 10, color: 'var(--text_secondary)' }}>21,5K подписчиков · 9 статей </Text>
                    <Div style={{display: 'flex'}}>
                        <Button onClick={() => this.openInteractionSub()} before={<Icon28UserAddedOutline width={20} height={20} />} size="s" stretched mode="secondary" style={{ marginRight: 8 }}>Вы подписаны</Button>
                        <Button before={<Icon20ArticlesOutline />} size="s" stretched mode="secondary">Создать статью</Button>
                    </Div>
                </Gradient>
                <Tabs>
                    <TabsItem
                        onClick={() => this.setState({ activeTab: 'published' })}
                        selected={this.state.activeTab === 'published'}
                    >
                        Опубликованные
                    </TabsItem>
                    <TabsItem
                        onClick={() => this.setState({ activeTab: 'drafts' })}
                        selected={this.state.activeTab === 'drafts'}
                    >
                        Черновики
                    </TabsItem>
                </Tabs>
                <Search icon={<Icon24Filter />} />
                {this.state.activeTab === "published" ? <div>
                <Div>
                    <div className="interaction-articles">
                        <img className="img-article" src="https://sun9-16.userapi.com/impg/72MRBeVlwD1yu5l4c_PZe0a5dyWYYPcrqMJ3TQ/nvpK0cFImuI.jpg?size=1200x800&quality=96&sign=9e140da1b974bfedc2e35c263dcfa645&type=album" />
                        <div onClick={() => this.openInteractionArticlesNo()}>
                            <IconButton className="block-icon-interaction-articles-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                        
                    </div>
                    <Title level="3" className="title-article">
                        О нас
                    </Title>
                    <Text className="text-article">
                        Доброго времени суток! Хотели бы в этой статье рассказать кто мы и чем занимаемся.
                    </Text>
                    <Text className="footer-article">
                        22 июн 2020 · 1003 просмотра
                    </Text>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Наши проекты
                        </Title>
                        <Text className="text-article">
                            CooK - рецепты:
                        </Text>
                        <Text className="footer-article">
                            16 мар в 17:31 · 517 просмотров
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-30.userapi.com/impg/OGutglyY6zebjC46NhqWmIzL8G1rWzxiLeNGgA/YyPBiO5S3j8.jpg?size=1200x800&quality=96&sign=3dec86f6924901ff369a5e324a8d5403&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Ответы на часто задавамые вопросы
                        </Title>
                        <Text className="text-article">
                            Что за игра Вакнцина?
                        </Text>
                        <Text className="footer-article">
                            5 июн в 14:37 · 404 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Наши маски
                        </Title>
                        <Text className="text-article">
                            Маска ВКонтакте «С любовью, Флинсти»:
                        </Text>
                        <Text className="footer-article">
                            6 апр в 19:24 · 178 просмотров
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-46.userapi.com/impg/qBHWvhOrQ0iEcnnChA-_vHYCCUw4hOOofqz6Jw/fXU3jhFBixo.jpg?size=1200x800&quality=96&sign=d4ac0550b1c80ee54cb207de6ff864de&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Обновление Вакцины 3.0
                        </Title>
                        <Text className="text-article">
                            Новые цены на улучшения
                        </Text>
                        <Text className="footer-article">
                            20 июн в 23:20 · 423 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Ответы на часто задавамые вопросы
                        </Title>
                        <Text className="text-article">
                            Что за игра Вакнцина?
                        </Text>
                        <Text className="footer-article">
                            5 июн в 14:37 · 404 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Ответы на часто задавамые вопросы
                        </Title>
                        <Text className="text-article">
                            Что за игра Вакнцина?
                        </Text>
                        <Text className="footer-article">
                            5 июн в 14:37 · 404 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Ответы на часто задавамые вопросы
                        </Title>
                        <Text className="text-article">
                            Что за игра Вакнцина?
                        </Text>
                        <Text className="footer-article">
                            5 июн в 14:37 · 404 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                <Spacing separator="center" />
                <Div className="block-articles">
                    <div className="text-articles">
                        <Title level="3" className="title-article-list">
                            Ответы на часто задавамые вопросы
                        </Title>
                        <Text className="text-article">
                            Что за игра Вакнцина?
                        </Text>
                        <Text className="footer-article">
                            5 июн в 14:37 · 404 просмотра
                        </Text>
                    </div>
                    <div className="interaction-articles">
                        <img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
                        <div onClick={() => this.openInteractionArticles()}>
                            <IconButton className="block-icon-interaction-articles-list-background">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                            <IconButton className="block-icon-interaction-articles-list">
                                <Icon24MoreHorizontal/>
                            </IconButton>
                        </div>
                    </div>
                </Div>
                </div> : null}
                {this.state.activeTab === "drafts" ?<div>
                    <Placeholder
                        icon={<Icon24ArticleOutline width={56} height={56} />}
                    >
                        У Вас пока нет черновиков
                    </Placeholder>
                </div> : null}
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);





















{/*
import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Div, 
    Panel, 
    Alert, 
    Group, 
    Button, 
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Avatar
} from '@vkontakte/vkui'
import { Icon16Done } from '@vkontakte/icons'
import Chel from '../../../svg/chel.svg'


class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
                header='Вопрос значит'
                text='Вас роняли в детстве?'
            />
        );
    }

    async openSpinner() {
        this.props.openPopout(<ScreenSpinner/>)
        await this.sleep(2500)
        this.props.closePopout()
    }

    openSnackbar() {
        this.props.openPopout(
            <Snackbar
                layout='vertical'
                onClose={() => this.props.closePopout()}
                action='Например кнопка'
                before={<Avatar size={24} style={{ background: 'var(--accent)' }}> <Icon16Done fill='#fff' width={14} height={14}/> </Avatar>}
            >
                Какой-то текст
            </Snackbar>
        );
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Examples</PanelHeader>
                <Group>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('home', 'placeholder')}>Открыть Placeholder</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openPopout()}>Открыть алерт</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openSpinner()}>Открыть спиннер</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openSnackbar()}>Открыть снекбар</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                            модальную страницу</Button>
                    </Div>
                    {withoutEpic && <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('modal', 'filters')}>Открыть модальное окно</Button>
                    </Div>}
                    {this.state.showImg && <Div className='div-center'>
                        <img src={Chel} alt="чел"/>
                    </Div>}
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
*/}