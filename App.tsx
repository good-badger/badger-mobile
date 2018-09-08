import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, ScreenOrientation } from 'expo';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Root, StyleProvider } from 'native-base';
// @ts-ignore
import Ionicons from './node_modules/@expo/vector-icons/fonts/Ionicons.ttf';
// @ts-ignore
import getTheme from './native-base-theme/components';
import LoadingScreen from './src/screens/Loading';
import OnBoardingNavigator from './Routes';

const Roboto_medium = require('./assets/fonts/Roboto/Roboto-Medium.ttf');

export default class App extends React.Component<{}> {
	state = {
		isReady: false
	};

	async componentDidMount() {
		ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
		await Font.loadAsync({
			Ionicons,
			Roboto_medium
		});
		this.setState({ isReady: true });
	}

	render() {
		if (this.state.isReady) {
			return (
				<Root>
					<StyleProvider style={getTheme()}>
						<ActionSheetProvider>
							<OnBoardingNavigator />
						</ActionSheetProvider>
					</StyleProvider>
				</Root>
			);
		}
		return <LoadingScreen />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
