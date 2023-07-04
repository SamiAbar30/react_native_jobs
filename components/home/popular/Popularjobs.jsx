import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import {
	images,
	icons,
	COLORS,
	FONT,
	SIZES,
	SHADOWS,
} from '../../../constants/index';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoaded } from 'expo-font';
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {

 const {data,isloading,error}= useFetch('search',{
  query: 'react developer',
  page: '1',
  num_pages: '1',
})

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popularjobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}> Show all</Text>
				</TouchableOpacity>
			</View>
				<View style={styles.cardsContainer}>
					{isloading ? (
						<ActivityIndicator size='large' color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : (
						<FlatList
							data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
							keyExtractor={(item) => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.small  }}
							renderItem={(item) => <PopularJobCard item={item} />}
              horizontal
						/>
					)}
				</View>
		</View>
	);
};

export default Popularjobs;
