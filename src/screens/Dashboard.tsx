import { Drawer, Icon } from 'native-base';
import React from 'react';
import DarkButton from '../components/DarkButton';
import SideBar from '../components/SideBar';
import { ThemeColors } from '../styles/Colors';
import { ImageBackground } from 'react-native';
import DashboardStyles from '../styles/Dashboard';

interface ParentProps {
	navigation: any;
}

export interface StateProps {
	isDrawerOpen: boolean;
}

const qr = require('../../assets/qr.png');
const background = require('../../assets/backgrounds/background_1.png');

class Dashboard extends React.Component<ParentProps, StateProps> {
	static navigationOptions = ({ navigation }: { navigation: any }) => {
		const { params = {} } = navigation.state;
		return {
			headerStyle: {
				backgroundColor: ThemeColors.blue_dark,
				borderBottomColor: ThemeColors.blue_dark,
				elevation: 0
			},
			headerTitleStyle: {
				color: ThemeColors.white,
				textAlign: 'center',
				alignSelf: 'center'
			},
			title: 'Dashboard',
			headerLeft: <Icon name="menu" onPress={() => params.openDrawer()} style={{ paddingLeft: 10, color: ThemeColors.white }} />
		};
	};
	componentDidMount() {
		this.props.navigation.setParams({
			// @ts-ignore
			openDrawer: this.openDrawer
		});
	}

	openDrawer = () => {
		// @ts-ignore
		this.props.navigation.openDrawer();
		this.setState({ isDrawerOpen: true });
	};

	closeDrawer = () => {
		// @ts-ignore
		this.props.navigation.closeDrawer();
		this.setState({ isDrawerOpen: false });
	};

	render() {
		return (
			<Drawer
				ref={ref => {
					// @ts-ignore
					this.drawer = ref;
				}}
				content={<SideBar navigation={this.props.navigation} />}
				onClose={() => this.closeDrawer()}
			>
				<ImageBackground source={background} style={[DashboardStyles.wrapper]}>
				
				</ImageBackground>
				<DarkButton propStyles={[DashboardStyles.button]} iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} />
			</Drawer>
		);
	}
}

export default Dashboard;
