import { Camera, Permissions } from 'expo';
import { Icon, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, KeyboardAvoidingView, Modal, StatusBar, AsyncStorage } from 'react-native';
import LightButton from '../components/LightButton';
import LogoView from '../components/LogoView';
import { ThemeColors } from '../styles/Colors';
import ModalStyle from '../styles/Modal';
import { showToast, toastType } from '../lib/utils/toast';
import { UserStorageKeys } from '../models/phoneStorage';

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
	name: string;
	ethAddress: string;
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
		errors: false,
		name: '',
		ethAddress: ''
	};

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
		this.retrieveUserFromStorage();
	}

	async retrieveUserFromStorage() {
		try {
			const name = await AsyncStorage.getItem(UserStorageKeys.name);
			const ethAddress = await AsyncStorage.getItem(UserStorageKeys.ethAddress);
			this.setState({ name, ethAddress });
		} catch (error) {
			console.error(error);
		}
	}

	_handleBarCodeRead = (payload: any) => {
		console.log('Payload data: ' + payload.data);
		if (payload.data.includes('callback')) {
			var callback = payload.data.substring(0, payload.data.indexOf('?'));
			fetch(callback + '?wallet=' + this.state.ethAddress + '&name=' + this.state.name);
			console.log(callback + '?wallet=' + this.state.ethAddress + '&name=' + this.state.name);
		} else if (!payload.data.includes('ethereum')) {
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
			return <Text>No access to camera</Text>;
		} else if (loading === true) {
			return <Text>Loading...</Text>;
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
