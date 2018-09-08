import { createStackNavigator } from 'react-navigation';

import OnBoarding from './src/screens/Onboarding';
import { ScanQR } from './src/screens/ScanQR';
import { CaptureDetails } from './src/screens/CaptureDetails';

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
		},
		CaptureDetails: {
			screen: CaptureDetails
		}
	},

	{
		initialRouteName: 'OnBoarding'
	}
);

export default Stack;
