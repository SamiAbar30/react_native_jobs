import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
	images,
	icons,
	COLORS,
	FONT,
	SIZES,
	SHADOWS,
} from '../../../constants/index';
import styles from './nearbyjobs.style';
import { isLoaded } from 'expo-font';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { useRouter } from 'expo-router';
const Nearbyjobs = ({data,isLoading,error}) => {
	const router = useRouter();


	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Nearbyjobs</Text>
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
					data.map((job) => (
						<NearbyJobCard
							job={job}
							key={`nearby-job-${job?.job_id}`}
							handeleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Nearbyjobs;
