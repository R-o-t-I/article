import React from 'react';
import {connect} from 'react-redux';
import bridge from '@vkontakte/vk-bridge';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Div, 
    Panel,
    Group,
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Avatar,
    Title,
    Text,
    Tabs,
    TabsItem,
    Spacing,
    ActionSheetItem,
    ActionSheet,
    platform,
    IOS,
    IconButton,
    Placeholder,
    PanelHeaderContent,
		FixedLayout,
		Button,
		PanelHeaderBack,
		VKCOM
} from '@vkontakte/vkui'

import {
	Icon16Done,
	Icon16Dropdown,
	Icon24ArticleOutline,
	Icon24MoreHorizontal,
	Icon28AddOutline,
	Icon28BookmarkOutline,
	Icon28DeleteOutline,
	Icon28DeleteOutlineAndroid,
	Icon28EditOutline,
	Icon28HideOutline,
	Icon28MoreHorizontal,
	Icon28PinOutline,
	Icon28UnfavoriteOutline,
	Icon28UnpinOutline,
} from '@vkontakte/icons'

class HomePanelBase extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'published',
			popout: null
		}
		this.openInteractionArticles = this.openInteractionArticles.bind(this);
		this.openInteractionArticlesNo = this.openInteractionArticlesNo.bind(this);
		this.openInteractionSub = this.openInteractionSub.bind(this);
		this.openInteractionSort = this.openInteractionSort.bind(this);
		this.iconsTargetRef = React.createRef();
	};

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
				<ActionSheetItem autoclose before={<Icon28EditOutline />}>
					Редактировать статью
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28PinOutline/>}>
					Закрепить в списке статей
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28BookmarkOutline/>}>
					Сохранить в закладках
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28HideOutline/>}>
					Скрыть со страницы статей
				</ActionSheetItem>
				<ActionSheetItem
					autoclose
					before={platform === IOS ? <Icon28DeleteOutline/> : <Icon28DeleteOutlineAndroid />}
					mode="destructive"
				>
					<div style={{color: "var(--destructive)"}}>Удалить статью</div>
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
				<ActionSheetItem autoclose before={<Icon28EditOutline />}>
					Редактировать статью
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28UnpinOutline/>}>
					Открепить
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28UnfavoriteOutline/>}>
					Удалить из закладок
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28HideOutline/>}>
					Скрыть со страницы статей
				</ActionSheetItem>
				<ActionSheetItem
					autoclose
					before={platform === IOS ? <Icon28DeleteOutline/> : <Icon28DeleteOutlineAndroid />}
					mode="destructive"
				>
					<div style={{color: "var(--destructive)"}}>Удалить статью</div>
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

	openInteractionSort() {
		this.props.openPopout(
			<ActionSheet 
				onClose={() => this.props.closePopout()}
				iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
				toggleRef={this.iconsTargetRef.current}
				header="Сортировать"
			>
				<ActionSheetItem autoclose>
					По умолчанию
				</ActionSheetItem>
				<ActionSheetItem autoclose>
					По популярности
				</ActionSheetItem>
			</ActionSheet>
		);
	}

	leaveGroup () {
		bridge.send("VKWebAppLeaveGroup", {"group_id": 1});
	}
	
	render() {
		const {id, setPage, withoutEpic, platform} = this.props;

		return (
			<Panel id={id}>
					<PanelHeader
						separator={false}
						left={<PanelHeaderBack label={platform === VKCOM ? 'Назад' : undefined} />}
					>
						<PanelHeaderContent
							aside={<Icon16Dropdown />}
							onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}
							status="21,5K подписчиков · 9 статей"
							before={<div onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}><Avatar style={{objectFit: 'cover'}} size={36} src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album"/></div>}
						>
							SkyReglis Studio
						</PanelHeaderContent>
					</PanelHeader>
					<Group style={{marginBottom: "60px"}}>
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
						<Spacing separator="center" />
						{this.state.activeTab === "published" ? <div>
							<Div onClick={() => setPage('home', 'viewingArticle')}>
								<div className="interaction-articles">
									<div className="block-img-article">
										<img className="img-article" src="https://sun9-16.userapi.com/impg/72MRBeVlwD1yu5l4c_PZe0a5dyWYYPcrqMJ3TQ/nvpK0cFImuI.jpg?size=1200x800&quality=96&sign=9e140da1b974bfedc2e35c263dcfa645&type=album" />
										<div className="shadow-img-article" />
									</div>
									<div onClick={() => this.openInteractionArticlesNo()}>
										<IconButton className="block-icon-interaction-articles-background">
											<Icon24MoreHorizontal width={32} height={32}/>
										</IconButton>
										<IconButton className="block-icon-interaction-articles">
											<Icon28MoreHorizontal/>
										</IconButton>
									</div>
								</div>
								<div style={{display: "flex"}}>
									<Title level="3" className="title-article">
										О нас
									</Title>
								</div>
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
									<div className="block-img-article">
										<img className="img-article-list" src="https://sun9-30.userapi.com/impg/OGutglyY6zebjC46NhqWmIzL8G1rWzxiLeNGgA/YyPBiO5S3j8.jpg?size=1200x800&quality=96&sign=3dec86f6924901ff369a5e324a8d5403&type=album" />
										<div className="shadow-img-article-list" />
									</div>
									<div onClick={() => this.openInteractionArticles()}>
										<IconButton className="block-icon-interaction-articles-list-background">
											<Icon24MoreHorizontal width={32} height={32}/>
										</IconButton>
										<IconButton className="block-icon-interaction-articles-list">
											<Icon28MoreHorizontal/>
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
									<div className="block-img-article">
										<img className="img-article-list" src="https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album" />
										<div className="shadow-img-article-list" />
									</div>
									<div onClick={() => this.openInteractionArticles()}>
										<IconButton className="block-icon-interaction-articles-list-background">
											<Icon24MoreHorizontal width={32} height={32}/>
										</IconButton>
										<IconButton className="block-icon-interaction-articles-list">
											<Icon28MoreHorizontal/>
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
									<div className="block-img-article">
										<img className="img-article-list" src="https://sun9-46.userapi.com/impg/qBHWvhOrQ0iEcnnChA-_vHYCCUw4hOOofqz6Jw/fXU3jhFBixo.jpg?size=1200x800&quality=96&sign=d4ac0550b1c80ee54cb207de6ff864de&type=album" />
										<div className="shadow-img-article-list" />
									</div>
									<div onClick={() => this.openInteractionArticles()}>
										<IconButton className="block-icon-interaction-articles-list-background">
											<Icon24MoreHorizontal width={32} height={32}/>
										</IconButton>
										<IconButton className="block-icon-interaction-articles-list">
											<Icon28MoreHorizontal/>
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
						<FixedLayout vertical="bottom">
							<Div>
								<Button
									onClick={() => setPage('home', 'editor')}
									before={<Icon28AddOutline width={24} height={24} />}
									size="m"
									stretched
								>
									Создать статью
								</Button>
							</Div>
						</FixedLayout>
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