import { Container, Icon, Text, Toast, View } from 'native-base';
import React from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import DarkButton from '../components/DarkButton';
import InputField from '../components/InputField';
import { ThemeColors } from '../styles/Colors';
import CaptureDetailsStyles from '../styles/CaptureDetails';
import { UserStorageKeys } from '../models/phoneStorage';
import { showToast } from '../lib/utils/toast';

const background = require('../../assets/backgrounds/background_1.png');

enum toastType {
	SUCCESS = 'success',
	WARNING = 'warning',
	DANGER = 'danger'
}

interface ParentProps {
	navigation: any;
	screenProps: any;
}

interface StateTypes {
	name: string;
	email: string;
	ethAddress: string;
}

export class CaptureDetails extends React.Component<ParentProps, StateTypes> {
	static navigationOptions = ({ navigation }: { navigation: any }) => {
		return {
			headerStyle: {
				backgroundColor: ThemeColors.blue_dark,
				borderBottomColor: ThemeColors.blue_dark
			},
			headerLeft: <Icon name="arrow-back" onPress={() => navigation.pop()} style={{ paddingLeft: 10, color: ThemeColors.white }} />,
			headerTitleStyle: {
				color: ThemeColors.white,
				textAlign: 'center',
				alignSelf: 'center'
			},
			headerTintColor: ThemeColors.white
		};
	};

	state = {
		name: '',
		email: '',
		ethAddress: ''
	};

	componentDidMount() {
		if (this.props.navigation.state.params) {
			if (this.props.navigation.state.params.hasOwnProperty('ethAddress')) {
				this.setState({ ethAddress: this.props.navigation.state.params.ethAddress });
			}
		}
	}

	navigateToDashBoard() {
		this.props.navigation.dispatch(
			StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
			})
		);
	}

	handleCreateUser() {
		if (this.state.name && this.state.email && this.state.ethAddress) {
			AsyncStorage.setItem(UserStorageKeys.name, this.state.name);
			AsyncStorage.setItem(UserStorageKeys.email, this.state.email);
			AsyncStorage.setItem(UserStorageKeys.ethAddress, this.state.ethAddress);
			this.navigateToDashBoard();
		} else {
			showToast('All fields are required!', toastType.DANGER);
		}
	}

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<ImageBackground source={background} style={[CaptureDetailsStyles.wrapper]}>
				<View style={{ height: Dimensions.get('window').height * 0.1 }} />
					<KeyboardAvoidingView behavior={'position'}>
						<View style={[CaptureDetailsStyles.flexLeft]}>
							<Text style={[CaptureDetailsStyles.header]}>Capture your details</Text>
						</View>
						<View style={CaptureDetailsStyles.divider} />
						<InputField value={this.state.name} labelName="name" onChangeText={(text: string) => this.setState({ name: text })} />
						<InputField value={this.state.email} labelName="email" onChangeText={(text: string) => this.setState({ email: text })} />
						<InputField value={this.state.ethAddress} labelName="ethereum address" onChangeText={(text: string) => this.setState({ ethAddress: text })} />
						<DarkButton propStyles={[CaptureDetailsStyles.button]} onPress={() => this.handleCreateUser()} text="GO!" />
					</KeyboardAvoidingView>
				</ImageBackground>
			</Container>
		);
	}
}
