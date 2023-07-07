import React, { useEffect, useState } from 'react';
// import { RapidAPIKey, RapidAPIHost } from '@env';
import axios from 'axios';
function useFetch(endpoint, query) {
	const [data, setData] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	// console.log(RapidAPIKey, RapidAPIHost);
	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,

		headers: {
			'X-RapidAPI-Key': 'a18839d25dmsh8afb8f20979ac1ep108760jsn535be664cb58',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: {
			...query,
		},
	};
	useEffect(() => {
		fetchJobs();
	}, []);
	const fetchJobs = async () => {
		setIsloading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsloading(false);
		} catch (error) {
			setError(error);
			console.error(error);
			alert('There is an error');
		} finally {
			setIsloading(false);
		}
	};
	const refetch = () => {
		setIsloading(true);
		fetchJobs();
	};
	return { data, isLoading, error, refetch };
}

export default useFetch;
