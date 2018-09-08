import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from './Colors';

interface Style {
	button: ViewStyle;
	wrapper: ViewStyle;
	flexLeft: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	wrapper: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
		backgroundColor: ThemeColors.blue_dark,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	badgeItem: {
		width: '50%'
	},
	button: {
		width: '100%',
		justifyContent: 'center'
	},
	flexLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%'
	}
});

export default styles;
