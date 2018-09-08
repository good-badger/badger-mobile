import { Drawer, Icon, View } from 'native-base';
import React from 'react';
import DarkButton from '../components/DarkButton';
import SideBar from '../components/SideBar';
import { ThemeColors } from '../styles/Colors';
import { ImageBackground, ScrollView } from 'react-native';
import DashboardStyles from '../styles/Dashboard';
import { SVGGenerator } from '../lib/utils/SVGGenerator';

import SvgUri from 'react-native-svg-uri';
interface ParentProps {
	navigation: any;
}

export interface StateProps {
	isDrawerOpen: boolean;
	badges: string[];
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
		badges: [],
		isDrawerOpen: false
	};

	componentDidMount() {
		this.props.navigation.setParams({
			// @ts-ignore
			openDrawer: this.openDrawer
		});

		const svgGen = new SVGGenerator();
		let badgeArray = [{sdg: 1, lvl: 2}, {sdg: 12, lvl: 1}, {sdg: 16, lvl: 3}, {sdg: 4, lvl: 2}, {sdg: 7, lvl: 1}];
		let badgeImages = [];

		for (var i in badgeArray) {
			badgeImages.push(svgGen.generateImgStringForSDG(badgeArray[i].sdg, badgeArray[i].lvl));
		 }
		this.setState({ badges: badgeImages});
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
			<ImageBackground source={background} style={{height: '100%'}}>
				<ScrollView  contentContainerStyle={[DashboardStyles.wrapper]}>
					{this.state.badges.map((el, idx) => {
						return (
							<View style={[DashboardStyles.badgeItem]} key={idx}>
								<SvgUri width="200" height="200" source={{ uri: el }} />
							</View>
						);
					})}
				</ScrollView>
			</ImageBackground>
				<DarkButton propStyles={[DashboardStyles.button]} iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} />
			</Drawer>
		);
	}
}

export default Dashboard;
