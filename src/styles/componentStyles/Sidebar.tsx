import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from '../../styles/Colors';

const { height } = Dimensions.get('window');

interface Style {
	userInfoBox: ViewStyle;
	closeDrawer: TextStyle;
	userName: TextStyle;
	email: TextStyle;
	ethAddress: TextStyle;
	linksBox: ViewStyle;
	iconLinks: ViewStyle;
	textLinks: TextStyle;
	reset: TextStyle;
	linkBox: ViewStyle;
	logo: ViewStyle;
	resetBox: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	userInfoBox: {
		width: '100%',
		flex: 0.4,
		padding: height * 0.04
	},
	closeDrawer: {
		color: 'white',
		fontSize: height * 0.06
	},
	userName: {
		fontSize: height * 0.04,
		color: ThemeColors.white,
		textAlign: 'left',
		marginTop: 20
	},
	ethAddress: {
		fontSize: height * 0.02,
		color: ThemeColors.blue_lightest,
		marginTop: 10,
		marginBottom: 10
	},
	email: {
		fontSize: height * 0.02,
		color: ThemeColors.blue_lightest,
		marginTop: 10
	},
	linksBox: {
		padding: height * 0.05,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%',
		backgroundColor: ThemeColors.blue,
		flex: 0.7
	},
	iconLinks: {
		width: height * 0.03,
		height: height * 0.03
	},
	textLinks: {
		paddingLeft: 10,
		fontSize: height * 0.03,
		color: ThemeColors.white
	},
	reset: {
		fontSize: height * 0.02,
		color: ThemeColors.white
	},
	logo: {
		width: height * 0.07,
		height: height * 0.07,
		marginTop: 10
	},
	linkBox: {
		justifyContent: 'flex-start',
		flex: 0.1
	},
	resetBox: {
		width: '100%',
		backgroundColor: 'red',
		flex: 0.1,
		alignItems: 'flex-start',
		padding: height * 0.05
	}
});

export default styles;
