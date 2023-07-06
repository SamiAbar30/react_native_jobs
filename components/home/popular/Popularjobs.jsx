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
import { useRouter } from 'expo-router';
const Popularjobs = () => {
 const router=useRouter()
 const {data,isLoading,error}= useFetch('search',{
  query: 'React developer',
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
					{isLoading ? (
						<ActivityIndicator size='large' color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : (
						<FlatList
							data={data}
							keyExtractor={(item) => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium  }}
							renderItem={({item}) => <PopularJobCard item={item} handeleNavigate={() => router.push(`/job-details/${job?.job_id}`)}/>}
              horizontal
						/>
					)}
				</View>
		</View>
	);
};

export default Popularjobs;
