import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { ThemeColors } from './Colors';

const { height, width } = Dimensions.get('window');
interface Style {
	wrapper: ViewStyle;
	slide: ViewStyle;
	logo: ViewStyle;
	textBox: ViewStyle;
	textBoxButtonContainer: ViewStyle;
	buttons: ViewStyle;
	infoBlockImage: ViewStyle;
	infoBlock: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	wrapper: {
		flex: 1
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: width * 0.9,
		height: height * 0.2,
		backgroundColor: 'transparent'
	},
	textBox: {
		paddingBottom: 33,
		paddingLeft: 60,
		paddingRight: 60
	},
	textBoxButtonContainer: {
		flex: 1.5,
		//justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column'
	},
	buttons: {
		//width: '100%',
		justifyContent: 'center',
		width: width * 0.8
	},
	infoBlockImage: {
		width: width * 0.08,
		height: width * 0.08
	},
	infoBlock: {
		borderWidth: 1,
		borderColor: ThemeColors.blue_light,
		justifyContent: 'center',
		height: height * 0.1
	}
});

export default styles;
