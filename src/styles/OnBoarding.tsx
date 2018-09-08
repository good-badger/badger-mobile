import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { ThemeColors } from './Colors';

const { height, width } = Dimensions.get('window');
interface Style {
	wrapper: ViewStyle;
	logo: ViewStyle;
	button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	wrapper: {
		flex: 1,
		backgroundColor: ThemeColors.blue_dark,
		justifyContent: 'center',
		display: 'flex',
		paddingBottom: 20
	},
	logo: {
		width: width * 0.9,
		height: height * 0.2,
		backgroundColor: 'transparent'
	},
	button: {
		width: '80%',
		alignSelf: 'center',
		justifyContent: 'center',
		margin: 13
	}
});

export default styles;
