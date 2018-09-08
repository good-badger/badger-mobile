import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import OnBoarding from './src/screens/Onboarding';
import { ScanQR } from './src/screens/ScanQR';
import { CaptureDetails } from './src/screens/CaptureDetails';
import Dashboard from './src/screens/Dashboard';
import SideBar from './src/components/SideBar';

const AppNavigator = createStackNavigator(
	{
		ScanQR: {
			screen: ScanQR
		},
		Dashboard: {
			screen: Dashboard
		},
		OnBoarding: {
			screen: OnBoarding,
			navigationOptions: {
				header: null
			}
		}
	},

	{
		initialRouteName: 'Dashboard'
	}
);

const DrawerNavigator = createDrawerNavigator(
	{
		Drawer: { screen: AppNavigator }
	},
	{
		initialRouteName: 'Drawer',
		contentComponent: SideBar
	}
);

const OnBoardingNavigator = createStackNavigator(
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
		},
		Dashboard: {
			screen: DrawerNavigator,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'OnBoarding'
	}
);

export default OnBoardingNavigator;
