import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import ContainerStyles from '../styles/Containers';

const { width, height } = Dimensions.get('window');
const logo = require('../../assets/logo.png');

const LogoView = ({ size = 0.2 }: { size: number }) => (
	<View style={ContainerStyles.flexRow}>
		<Image
			resizeMode={'contain'}
			style={{
				width: width * 0.9,
				height: height * size,
				backgroundColor: 'transparent'
			}}
			source={logo}
		/>
	</View>
);

export default LogoView;
