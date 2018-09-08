import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { View, Icon, Text, Container } from 'native-base';
import { Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import ContainerStyles from '../styles/Containers';
import SideBarStyles from '../styles/componentStyles/Sidebar';
import { ThemeColors, ResetBox, ClaimsButton } from '../styles/Colors';
import { UserStorageKeys } from '../models/phoneStorage';
import { StackActions, NavigationActions } from 'react-navigation';
const logo = require('../../assets/logo.png');
const settingIcon = require('../../assets/settings.png');

interface PropTypes {
	navigation: any;
}

interface StateTypes {
	name: string;
	ethAddress: string;
	email: string;
}

class SideBar extends Component<PropTypes, StateTypes> {
	state = {
		name: '',
		ethAddress: '',
		email: ''
	};

	async retrieveUserFromStorage() {
		try {
			const name = await AsyncStorage.getItem(UserStorageKeys.name);
			const ethAddress = await AsyncStorage.getItem(UserStorageKeys.ethAddress);
			const email = await AsyncStorage.getItem(UserStorageKeys.email);
			this.setState({ name, ethAddress, email });
		} catch (error) {
			console.error(error);
		}
	}

	componentDidMount() {
		this.retrieveUserFromStorage();
	}

	resetUser = () => {
		AsyncStorage.clear();
		this.props.navigation.dispatch(
			StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'OnBoarding' })]
			})
		);
	};

	render() {
		return (
			<Container style={[ContainerStyles.flexColumn, { backgroundColor: ThemeColors.blue }]}>
				<LinearGradient style={SideBarStyles.userInfoBox} colors={[ClaimsButton.colorSecondary, ClaimsButton.colorPrimary]}>
					<View style={[ContainerStyles.flexRow, { justifyContent: 'space-between', alignItems: 'center' }]}>
						<Icon onPress={() => this.props.navigation.closeDrawer()} style={SideBarStyles.closeDrawer} name="close" />
						<Image source={logo} style={SideBarStyles.logo} />
					</View>
					<View style={[ContainerStyles.flexRow, { justifyContent: 'flex-start', width: '100%', paddingTop: 10 }]}>
						<View style={[ContainerStyles.flexColumn, { alignItems: 'flex-start' }]}>
							<Text style={SideBarStyles.userName}>{this.state.name}</Text>
							<Text style={SideBarStyles.email}>email: {this.state.email}</Text>
							<Text style={SideBarStyles.ethAddress}>ethereum: {this.state.ethAddress}</Text>
						</View>
					</View>
				</LinearGradient>
				<View style={[ContainerStyles.flexColumn, SideBarStyles.linksBox]}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} style={[ContainerStyles.flexRow, SideBarStyles.linkBox]}>
						<Image source={settingIcon} style={SideBarStyles.iconLinks} />
						<Text style={SideBarStyles.textLinks}>Settings</Text>
					</TouchableOpacity>
				</View>
				<LinearGradient colors={[ResetBox.colorSecondary, ResetBox.colorPrimary]} style={[ContainerStyles.flexColumn, SideBarStyles.resetBox]}>
					<TouchableOpacity onPress={this.resetUser}>
						<Text style={SideBarStyles.reset}>RESET USER</Text>
					</TouchableOpacity>
				</LinearGradient>
			</Container>
		);
	}
}

export default SideBar;
