import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
	List, 
	Cell, 
	Avatar, 
	ModalPage, 
	ModalPageHeader, 
	PanelHeaderButton, 
	withPlatform, 
	IOS
} from "@vkontakte/vkui";
import { Icon24Dismiss, Icon24Cancel, Icon24Chevron } from '@vkontakte/icons'

const bots = [
	{
		name: 'Александр Тихонович',
		avatar: 'https://sun9-81.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album',
		desc: '4 944 подписчика · нет статей'
	},
	{
		name: 'SkyReglis Studio',
		avatar: 'https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album',
		desc: '21,5K подписчиков · 9 статей'
	},
	{
		name: 'CooK — кулинарный уголок | Рецепты',
		avatar: 'https://sun9-52.userapi.com/impf/c853528/v853528146/149624/K8N6X2dCoOA.jpg?size=576x576&quality=96&sign=8463996d917d5af51f2fa4c827256468&type=album',
		desc: '3 707 подписчиков · 4 статьи'
	},
];

class HomeBotsListModal extends React.Component {

	render() {
		const {id, onClose, openModal, platform} = this.props;

		return (
			<ModalPage
				id={id}
				header={
					<ModalPageHeader
						left={platform !== IOS &&
						<PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
						right={platform === IOS &&
						<PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
					>
						Страницы
					</ModalPageHeader>
				}
				onClose={onClose}
				settlingHeight={80}
		>
				<List>
					{bots.map((bot, index) => (
						<Cell
							key={index}
							description={bot.desc}
							before={<Avatar size={40} src={bot.avatar}/>}
							asideContent={<Icon24Chevron fill="#528bcc"/>}
						>
							{bot.name}
						</Cell>
					))}
				</List>
			</ModalPage>
		);
	}

}

const mapDispatchToProps = {
  openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
