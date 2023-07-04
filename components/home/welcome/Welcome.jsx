import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
const jobTypes = [
	'Full-time',
	'Part-time',
	'Freelance',
	'Contractor',
	'Casual',
	'Zero-hour',
	'Executive',
	'Fixed-term',
	'Union ',
];
const Welcome = () => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState('Full-time');
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=''
						onChange={() => {}}
						placeholder='what are you looking for?'
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small  }}
					horizontal
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item);
								router.push(`/search/${item}`);
							}}>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default Welcome;