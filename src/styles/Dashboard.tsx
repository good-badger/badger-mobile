import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from './Colors';

interface Style {
	button: ViewStyle;
	wrapper: ViewStyle;
	flexLeft: ViewStyle;
	modalWrapper: ViewStyle;
	backgroundWrapper: ViewStyle;
	badgeItem: ViewStyle;
	modalContainer: ViewStyle;
	modalContent: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalWrapper: {
		justifyContent: 'flex-end',
    	margin: 0,
	},
	backgroundWrapper: {
		backgroundColor: ThemeColors.blue_dark,
		height: '100%'
	},
	wrapper: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	badgeItem: {
		width: '50%'
	},
	button: {
		width: '100%',
		justifyContent: 'center',
		backgroundColor: 'lightblue',
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 4,
		alignItems: 'center',
		padding: 12,
	},
	flexLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%'
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	  }
});

export default styles;
