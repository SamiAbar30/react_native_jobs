import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {
	images,
	icons,
	COLORS,
	FONT,
	SIZES,
	SHADOWS,
} from '../constants/index';
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from '../components/index';
import useFetch from '../hook/useFetch';
export default function Home() {
	
	const { data, isLoading, error } = useFetch('search', {
		query: 'react developer',
		page: '1',
		num_pages: '1',
	});
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
					),
					headerTitle: '',
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }} >
          <Welcome/>
          <Popularjobs data={data} isLoading={isLoading} error={error}/>
          <Nearbyjobs data={data} isLoading={isLoading} error={error}/>
        </View>
			</ScrollView>
		</SafeAreaView>
	);
}
