import { Drawer, Icon, View } from 'native-base';
import React from 'react';
import DarkButton from '../components/DarkButton';
import SideBar from '../components/SideBar';
import { ThemeColors } from '../styles/Colors';
import { ImageBackground, Image } from 'react-native';
import DashboardStyles from '../styles/Dashboard';
import { SVGGenerator } from '../lib/utils/SVGGenerator';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
interface ParentProps {
	navigation: any;
}

export interface StateProps {
	isDrawerOpen: boolean;
	badgeImg: string;
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

	state = {
		badgeImg: '',
		isDrawerOpen: false
	};

	componentDidMount() {
		this.props.navigation.setParams({
			// @ts-ignore
			openDrawer: this.openDrawer
		});

		const svgGen = new SVGGenerator();

		this.setState({ badgeImg: svgGen.generateImgStringForSDG(7) });
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
					{this.state.badgeImg !== '' && <SvgUri width="400" height="300" source={{ uri: this.state.badgeImg }} />}
				</ImageBackground>
				<DarkButton propStyles={[DashboardStyles.button]} iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} />
			</Drawer>
		);
	}
}

export default Dashboard;
