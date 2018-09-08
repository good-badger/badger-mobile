import { Container } from 'native-base';
import React from 'react';
import { AsyncStorage, Dimensions, ImageBackground, Text, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import DarkButton from '../components/DarkButton';
import LightButton from '../components/LightButton';
import LogoView from '../components/LogoView';
import { UserStorageKeys } from '../models/phoneStorage';
import { ThemeColors } from '../styles/Colors';
import ContainerStyles from '../styles/Containers';
import OnBoardingStyles from '../styles/OnBoarding';

const { height, width } = Dimensions.get('window');
const qr = require('../../assets/qr.png');

const background = require('../../assets/backgrounds/background_1.png');

interface ParentProps {
	navigation: any;
	screenProps: any;
}

export default class OnBoarding extends React.Component<ParentProps> {
	componentDidMount() {
		AsyncStorage.getItem(UserStorageKeys.name, (error: any, name: string | undefined) => {
			if (name) {
				this.props.navigation.dispatch(
					StackActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
					})
				);
			}
		});
	}

	render() {
		return (
			<Container>
				<ImageBackground source={background} style={[OnBoardingStyles.wrapper]}>
					<View style={[ContainerStyles.flexColumn]}>
						<Text
							style={{
								color: ThemeColors.blue_lightest,
								fontSize: 29,
								marginTop: height * 0.1
							}}
						>
							Welcome to Badger
						</Text>
						<LogoView size={0.3} />
						<Text style={{ color: ThemeColors.white, fontSize: 22, marginBottom: 10 }}>Your personalized SDG badge wallet</Text>
						<DarkButton iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} propStyles={[OnBoardingStyles.button]} />
						<LightButton text="MANUAL" onPress={() => this.props.navigation.navigate('CaptureDetails')} propStyles={[OnBoardingStyles.button]} />
					</View>
				</ImageBackground>
			</Container>
		);
	}
}
