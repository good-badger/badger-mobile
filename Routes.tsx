import { createStackNavigator } from 'react-navigation';

import OnBoarding from './src/screens/Onboarding';
import { ScanQR } from './src/screens/ScanQR';

const Stack = createStackNavigator(
	{
		OnBoarding: {
			screen: OnBoarding,
			navigationOptions: {
				header: null
			}
		},
		ScanQR: {
			screen: ScanQR
		}
	},

	{
		initialRouteName: 'OnBoarding'
	}
);

export default Stack;
