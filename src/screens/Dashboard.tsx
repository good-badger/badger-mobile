import { Drawer, Icon, View } from 'native-base';
import React from 'react';
import DarkButton from '../components/DarkButton';
import SideBar from '../components/SideBar';
import { NavigationActions, StackActions } from 'react-navigation';
import { ThemeColors } from '../styles/Colors';
import { ImageBackground, ScrollView, AsyncStorage, Text, TouchableHighlight, TouchableOpacity, RefreshControl } from 'react-native';
import Modal from 'react-native-modal';
import DashboardStyles from '../styles/Dashboard';
import { SVGGenerator } from '../lib/utils/SVGGenerator';
import { UserStorageKeys } from '../models/phoneStorage';

import SvgUri from 'react-native-svg-uri';
import { showToast, toastType } from '../lib/utils/toast';
interface ParentProps {
	navigation: any;
}
export interface StateProps {
	isDrawerOpen: boolean;
	badges: string[];
	modalVisible: boolean;
	contentMsg: string;
}

const qr = require('../../assets/qr.png');
const background = require('../../assets/backgrounds/background_1.png');
const svgGen = new SVGGenerator();
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
		isDrawerOpen: false,
		modalVisible: false,
		contentMsg: 'Loading your badges...',
		refreshing: false
	};

	componentDidMount() {
		this.getBadges();
	}

	getBadges = () => {
		AsyncStorage.getItem(UserStorageKeys.ethAddress, (error: any, ethAddress: string | undefined) => {
			if (ethAddress) {
				let badgeImages: string[] = [];
				fetch(`http://54.229.220.54:3000/api/badges?wallet=${ethAddress}`)
					.then(response => {
						return response.json();
					})
					.then(badgesRes => {
						if(badgesRes.length === 0) {
							this.setState({contentMsg: 'You currently do not have any badges'});
						}
						for (var i in badgesRes) {
							const artDetail = this.decodeBadgeArtwork(badgesRes[i].artwork);
							const imageStr = svgGen.generateImgStringForSDG(Number(artDetail[0]), Number(artDetail[1]));
							badgeImages.push(imageStr);
						}
						this.setState({ badges: badgeImages, refreshing: false });

					}).catch((error) => {
						showToast('invalid ethereum address', toastType.DANGER);
						this.setState({contentMsg: 'Your ethereum address is invalid'});
					});
				this.props.navigation.setParams({
					// @ts-ignore
					openDrawer: this.openDrawer
				});
			} else {
				console.log('no eth address found');
			}
		});
	}

	_onRefresh = () => {
		this.setState({refreshing: true, contentMsg: 'Loading your badges...'});
		this.getBadges();
	  }

	renderBadges = () => {
		if (this.state.badges.length === 0 || this.state.refreshing === true) {
			return (
				<View style={[DashboardStyles.empty]}>
					<Text style={{color: 'white'}}>
						{this.state.contentMsg}
					</Text>
				</View>
			);
		}
		return this.state.badges.map((el, idx) => {
			return (
				<TouchableOpacity
					style={[DashboardStyles.badgeItem]}
					key={idx}
					onPress={() => {
						this.getBadgeDetails(idx);
					}}
				>
					<SvgUri width="200" height="200" source={{ uri: el }} />
				</TouchableOpacity>
			);
		})
	}

	decodeBadgeArtwork = (artwork: string) => {
		const sdg = artwork.slice(0, 2);
		const lvl = artwork.slice(2, 3);
		return [sdg, lvl];
	};

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

	setModalVisible(visible: boolean) {
		this.setState({ modalVisible: visible });
	}

	getBadgeDetails = (badgeIndex: number) => {
		this.setModalVisible(true);
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
				<ImageBackground source={background} style={[DashboardStyles.backgroundWrapper]}>
					<ScrollView contentContainerStyle={[DashboardStyles.wrapper]} 
					refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh}
					/>
					}>
						{this.renderBadges()}
					</ScrollView>
					<DarkButton propStyles={[DashboardStyles.button]} iconImage={qr} text="SCAN QR" onPress={() => this.props.navigation.navigate('ScanQR')} />
				</ImageBackground>
				<View style={[DashboardStyles.modalContainer]}>
					<Modal isVisible={this.state.modalVisible} style={[DashboardStyles.modalWrapper]}>
						<View style={[DashboardStyles.modalContent]}>
							<View>
								<Text>Hello World!</Text>

								<TouchableHighlight
									onPress={() => {
										this.setModalVisible(!this.state.modalVisible);
									}}
								>
									<Text style={[DashboardStyles.button]}>Close</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Modal>
				</View>
			</Drawer>
		);
	}
}

export default Dashboard;
