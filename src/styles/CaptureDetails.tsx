import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from './Colors';

interface Style {
	button: ViewStyle;
	wrapper: ViewStyle;
	flexLeft: ViewStyle;
	header: TextStyle;
	divider: ViewStyle;
	input: TextStyle;
}

const styles = StyleSheet.create<Style>({
	wrapper: {
		flex: 1,
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
		backgroundColor: ThemeColors.blue_dark
	},
	button: {
		width: '100%',
		justifyContent: 'center',
		marginTop: 20
	},
	header: {
		color: ThemeColors.blue_lightest,
		fontSize: 24,
		paddingBottom: 15,
		fontWeight: '500',
		flex: 0.7
	},
	flexLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%'
	},
	divider: {
		width: '60%',
		height: 1,
		backgroundColor: ThemeColors.blue_medium,
		marginBottom: 15
	},
	input: {
		height: 40,
		color: ThemeColors.blue_lightest,
		margin: 2
	}
});

export default styles;
