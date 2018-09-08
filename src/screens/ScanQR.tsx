import { Camera, Permissions } from 'expo';
import { Icon, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, KeyboardAvoidingView, Modal, StatusBar } from 'react-native';
import LightButton from '../components/LightButton';
import LogoView from '../components/LogoView';
import { ThemeColors } from '../styles/Colors';
import ModalStyle from '../styles/Modal';
import { showToast, toastType } from '../lib/utils/toast';

const { height, width } = Dimensions.get('window');

interface ParentProps {
	navigation: any;
}

interface State {
	hasCameraPermission: boolean;
	type: string;
	qrFound: boolean;
	loading: boolean;
	modalVisible: boolean;
	payload: string | null;
	errors: boolean;
}

export class ScanQR extends React.Component<ParentProps, State> {
	static navigationOptions = ({ screenProps }: { screenProps: any }) => {
		return {
			headerStyle: {
				backgroundColor: ThemeColors.blue,
				borderBottomColor: ThemeColors.blue
			},
			title: 'ETH address QR',
			headerTitleStyle: {
				color: ThemeColors.white,
				textAlign: 'center',
				alignSelf: 'center'
			},
			headerTintColor: ThemeColors.white
		};
	};

	state = {
		hasCameraPermission: false,
		type: Camera.Constants.Type.back,
		qrFound: false,
		loading: false,
		modalVisible: false,
		payload: null,
		errors: false
	};

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	_handleBarCodeRead = (payload: any) => {
		if (!payload.data.includes('ethereum')) {
			showToast('Only Ethereum addresses work', toastType.DANGER);
		} else {
			this.setState({ modalVisible: true, payload: payload.data.replace('ethereum:', '') });
		}
	};

	handleResetScan = () => {
		this.setState({ modalVisible: false, payload: null, errors: false });
	};

	navigateToDetails = () => {
		this.setState({ modalVisible: false });
		this.props.navigation.navigate('CaptureDetails', {
			ethAddress: this.state.payload
		});
	};

	setModalVisible(visible: boolean) {
		this.setState({ modalVisible: visible });
	}

	renderModal() {
		return (
			<KeyboardAvoidingView behavior={'position'}>
				<View style={ModalStyle.modalOuterContainer}>
					<View style={ModalStyle.modalInnerContainer}>
						<View style={ModalStyle.flexRight}>
							<Icon onPress={() => this.setModalVisible(false)} active name="close" style={{ color: ThemeColors.white, top: 10, fontSize: 30 }} />
						</View>
						<View style={ModalStyle.flexLeft}>
							<LogoView size={0.1} />
						</View>
						<View style={ModalStyle.flexLeft}>
							<Text style={{ color: ThemeColors.blue_lightest, fontSize: 29 }}>your eth address:</Text>
						</View>
						<View style={ModalStyle.divider} />
						<Text style={{ color: ThemeColors.white, fontSize: 18 }}>{this.state.payload}</Text>
						<LightButton propStyles={[ModalStyle.button]} onPress={() => this.navigateToDetails()} text={'CONTINUE'} />
						<LightButton propStyles={[ModalStyle.button]} onPress={() => this.handleResetScan()} text={'RE-SCAN'} />
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}

	render() {
		const { hasCameraPermission, loading } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <View><Text>No access to camera</Text></View>;
		} else if (loading === true) {
			return <View><Text>Loading...</Text></View>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<StatusBar barStyle="light-content" />
					<Modal
						animationType="slide"
						transparent={true}
						visible={this.state.modalVisible}
						onRequestClose={() => {
							alert('Modal has been closed.');
						}}
					>
						{this.renderModal()}
					</Modal>
					<Camera style={{ flex: 1 }} type={this.state.type} onBarCodeRead={this._handleBarCodeRead} />
				</View>
			);
		}
	}
}
