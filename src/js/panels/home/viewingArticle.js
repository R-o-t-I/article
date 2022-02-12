import React from 'react';
import {connect} from 'react-redux';

import {goBack, openModal, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderContent,
    Group,
    Avatar,
    FixedLayout,
    Separator,
    IconButton,
    ActionSheet,
    ActionSheetItem,
    platform,
    IOS,
    Title,
    Text,
    Div,
    Link
} from "@vkontakte/vkui";

import {
    Icon28BookmarkOutline,
    Icon28DeleteOutline,
    Icon28DeleteOutlineAndroid,
    Icon28EditOutline,
    Icon28FavoriteOutline,
    Icon28GlobeOutline,
    Icon28MentionOutline,
    Icon28MoreVertical,
    Icon28ShareOutline
} from '@vkontakte/icons';

class HomePanelViewingArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popout: null
        }
        this.openInteraction = this.openInteraction.bind(this);
        this.iconsTargetRef = React.createRef();
    };

    openInteraction() {
        this.props.openPopout(
            <ActionSheet 
                onClose={() => this.props.closePopout()}
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                toggleRef={this.iconsTargetRef.current}
            >
                <ActionSheetItem autoclose before={<Icon28EditOutline/>}>
                    Редактировать
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28GlobeOutline/>}>
                    Открыть в браузере
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28MentionOutline/>}>
                    Упоминания
                </ActionSheetItem>
                <ActionSheetItem autoclose before={<Icon28BookmarkOutline/>}>
                    Сохранённые статьи
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

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    separator={true}
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    <PanelHeaderContent
                        status="16 мар в 15:31"
                        before={<Avatar style={{objectFit: 'cover'}} size={36} src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album"/>}
                    >
                        SkyReglis Studio
                    </PanelHeaderContent>
                </PanelHeader>
                <Group>
                    <Title level="3" className="title-article-viewingArticle">
                        Наши проекты
                    </Title>
                    <Text className="text-article-viewingArticle">
                        <Link><h1>CooK - рецепты:</h1></Link>
                    </Text>
                    <img className="img-article-viewingArticle" src="https://sun9-65.userapi.com/impg/KcCWt2nF4ONFCCRE-3TFj21_kzSWrX192lmTwg/XQalOssevw8.jpg?size=576x576&quality=96&sign=f66248e882d181efcc81199bf35f3837&type=album" />
                    <Text className="text-article-viewingArticle">
                        <Link>Первый сервис</Link> Александр начал делать в октябре 2019 года, еще без участия Артема, когда они были совсем незнакомы. Это был сервис CooK — рецепты. Александр решил попробовать познакомиться с программированием и узнать, что такое VK Mini Apps. В итоге он сделал черновой вариант сервиса, но поскольку он был совсем новичком в этом, у него были трудности и он не мог сделать все то, что хотел. Поэтому, он пошел в беседу разработчиков <Link>VK Mini Apps</Link> искать ответы на свои вопросы. На вопросы Александра откликнулся Артем. После этого мы разобщались и Александр предложил вместе продолжить разработку сервиса. Артем согласился и вместе мы продолжили разработку. Как сервис был готов, его отдали на тестирование шикарной команде <Link>VK Testers</Link>. И после тестирования, <Link>20 января 2020 года</Link> сервис опубликовали в каталоге ВКонтакте.
                    </Text>
                    <div style={{textAlign: "center", marginTop: 10, marginBottom: -30}}>✲✲✲</div>
                    <Text className="text-article-viewingArticle">
                        <Link><h1>Мечты:</h1></Link>
                    </Text>
                    <img className="img-article-viewingArticle" src="https://sun9-14.userapi.com/impg/SBvQB6QAvdxI284YG4DCZZtVgUabwkW98C4ywQ/Xu2U1ymsdOI.jpg?size=512x512&quality=96&sign=b4e69906d1fa3de26ae5798ad128e7cb&type=album" />
                    <Text className="text-article-viewingArticle">
                        Идея второго сервиса возникла спонтанно у Артема. Сервис максимально простой по логике. При открытии Вас встречает инпут с вопросом: «А какая у вас мечта? Расскажите нам о ней, чтобы узнать о чем мечтают другие люди». Эту мечту можно оставить публично и анонимно. После недолгих раздумий и предложений по исправлениям/добавлениям мы занялись разработкой. После разработки мы опять его отдали на тестирование команде VK Testers. После тестирования, 28 апреля 2020 года сервис был опубликован в каталоге мини-приложения ВКонтакте.
                    </Text>
                    <FixedLayout filled vertical="bottom" style={{marginBottom: "-48px"}}>
                        <Separator wide />
                        <div style={{display: "flex"}}>
                            <IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ShareOutline /></IconButton>
                            <IconButton style={{color: "var(--icon_tertiary)"}}><Icon28FavoriteOutline /></IconButton>
                            <IconButton onClick={() => this.openInteraction()} style={{color: "var(--icon_tertiary)"}}><Icon28MoreVertical /></IconButton>
                        <div className="view-viewingArticle">
                            <div>527 просмотров</div>
                        </div>
                        </div>
                    </FixedLayout>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = { goBack, openModal, openPopout, closePopout };

export default connect(null, mapDispatchToProps)(HomePanelViewingArticle);