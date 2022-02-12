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
	SubnavigationBar,
	SubnavigationButton,
	Title,
	Headline,
	FixedLayout,
	Separator,
	IconButton,
	HorizontalScroll,
	VKCOM,
	ActionSheet,
	ActionSheetItem
} from "@vkontakte/vkui";

import {
	Icon28AddCircleOutline,
	Icon28ArrowUturnLeftOutline,
	Icon28ArrowUturnRightOutline,
	Icon28VideoOutline,
	Icon28ChainOutline,
	Icon28DoneOutline,
	Icon28EditOutline,
	Icon28GridSquareOutline,
	Icon28PictureOutline,
	Icon28FilmStripOutline,
	Icon28MusicOutline,
	Icon28PollSquareOutline,
	Icon28MarketOutline,
	Icon28PlaySpeedOutline,
	Icon28BillSeparatedOutline
} from '@vkontakte/icons';

class HomePanelEditor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
		this.openAddList = this.openAddList.bind(this);
		this.iconsTargetRef = React.createRef();
	};

	openAddList() {
		this.props.openPopout(
			<ActionSheet 
				onClose={() => this.props.closePopout()}
				iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
				toggleRef={this.iconsTargetRef.current}
			>
				<ActionSheetItem autoclose before={<Icon28PictureOutline />}>
					Изображение
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28FilmStripOutline />}>
					Видеозапись
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28MusicOutline />}>
					Аудиозапись
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28PollSquareOutline />}>
					Опрос
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28MarketOutline />}>
					Товар
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28PlaySpeedOutline />}>
					GIF
				</ActionSheetItem>
				<ActionSheetItem autoclose before={<Icon28BillSeparatedOutline />}>
					Сепаратор
				</ActionSheetItem>
			</ActionSheet>
		);
	}

	render() {
		const {id, goBack, platform} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					separator={false}
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
					right={
						<div style={{display: "flex"}}>
							<IconButton onClick={() => this.props.openModal("MODAL_PAGE_ARTICLES")}><Icon28GridSquareOutline /></IconButton>
							<IconButton onClick={() => this.props.openModal("MODAL_PAGE_PUBLICATION")}><Icon28DoneOutline/></IconButton>
						</div>
					}
				>
					<PanelHeaderContent
						status="Новая статья"
						before={<Avatar style={{objectFit: 'cover'}} size={36} src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album"/>}
					>
						SkyReglis Studio
					</PanelHeaderContent>
				</PanelHeader>
				<Group>
					<Title level="1" weight="bold" className="title-editor">
						Заголовок
					</Title>
					<Headline weight="regular" className="headline-editor">
						Основная часть
					</Headline>
				</Group>
				<FixedLayout filled vertical="bottom" style={{marginBottom: "-48px"}}>
					<Separator wide />
					<div style={{display: "flex"}}>
						<IconButton style={{color: "var(--accent)"}}><Icon28AddCircleOutline onClick={() => this.openAddList()} /></IconButton>
						<div className="separator-editor"/>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnLeftOutline /></IconButton>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnRightOutline /></IconButton>
						<div className="separator-editor"/>
						<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
							<div style={{display: "flex"}}>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ChainOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28EditOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ChainOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28EditOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ChainOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28EditOutline /></IconButton>
							</div>
						</HorizontalScroll>
					</div>
				</FixedLayout>
			</Panel>
		);
	}

}

const mapDispatchToProps = {
	goBack,
	openModal,
	openPopout,
	closePopout
};

export default connect(null, mapDispatchToProps)(HomePanelEditor);
