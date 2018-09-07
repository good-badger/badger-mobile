import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import DarkButton from '../components/DarkButton';
import ContainerStyles from '../styles/Containers';
import OnBoardingStyles from '../styles/OnBoarding';
import LogoView from '../components/LogoView';
import { ThemeColors } from '../styles/Colors';

const { height, width } = Dimensions.get('window');
const qr = require('../../assets/qr.png');

interface ParentProps {
	navigation: any;
	screenProps: any;
}

export default class OnBoarding extends React.Component<ParentProps> {
	render() {
		return (
			<View style={OnBoardingStyles.wrapper}>
				<View style={[ContainerStyles.flexColumn, ContainerStyles.backgroundColorDark]}>
					<View style={[ContainerStyles.flexColumn, { justifyContent: 'space-between' }]}>
						<Text style={{ color: ThemeColors.blue_lightest, fontSize: 29, marginTop: height * 0.1 }}>Welcome to Badger</Text>
						<LogoView size={0.3} />
						<Text style={{ color: ThemeColors.white, fontSize: 22 }}>Your personalized SDG badge wallet</Text>
						<DarkButton iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} propStyles={{ margin: height * 0.1 }} />
					</View>
				</View>
			</View>
		);
	}
}
