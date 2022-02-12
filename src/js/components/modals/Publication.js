import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
	ModalPage, 
	ModalPageHeader, 
	PanelHeaderButton, 
	withPlatform, 
	IOS,
	Div,
	Cell,
	Subhead,
	Link,
	FormLayout,
	FormItem,
	Input,
	Button,
	Group,
	IconButton
} from "@vkontakte/vkui";

import {
  Icon24Dismiss,
  Icon24Cancel,
	Icon28CameraOutline,
	Icon56CameraOutline,
	Icon28CopyOutline
} from '@vkontakte/icons'

import { Checkbox } from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';

class Publication extends React.Component {

	render() {
		const {id, onClose, openModal, platform} = this.props;

		return (
			<ModalPage
				id={id}
				header={
					<ModalPageHeader
						left={platform !== IOS &&<PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
						right={platform === IOS &&<PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
					>
						Публикация
					</ModalPageHeader>
				}
				onClose={onClose}
				settlingHeight={80}
			>
				<Group>
					<Cell
						description={
							<div className="borderAddImgPublication">
								<Icon56CameraOutline className="iconAddImgPublication"/>
								<div className="textAddImgPublication">Загрузить изображение</div>
							</div>
						}
						disabled
					>
						<Subhead weight="regular" style={{color: "var(--text_secondary)"}}>Обложка</Subhead>
					</Cell>
					<FormLayout>
						<FormItem
							top="Статья будет сохранена и доступна по ссылке:" 
						>
							<div className="inputPublicationLink">
								<label for="txt">vk.com/@skyreglis-
									<input
										type="text"
										id="txt"
									/>
								</label>
							</div>
							</FormItem>
							<Checkbox>Доступна только донам</Checkbox>
							<Checkbox>Показывать автора</Checkbox>
					</FormLayout>
					<FormItem>
						<Button size="m" stretched onClick={onClose}>Сохранить</Button>
					</FormItem>
				</Group>
			</ModalPage>
		);
	}

}

const mapDispatchToProps = {
  openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(Publication));