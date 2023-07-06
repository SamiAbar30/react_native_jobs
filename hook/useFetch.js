import React, { useEffect, useState } from 'react';
// import { RapidAPIKey, RapidAPIHost } from '@env';
import axios from 'axios';
function useFetch(endpoint, query) {
	const [data, setData] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState();
	// console.log(RapidAPIKey, RapidAPIHost);
	const options = {
		method: 'GET',
		url: 'https://jsearch.p.rapidapi.com/search',
		params: {
			...query
		},
		headers: {
			'X-RapidAPI-Key': 'a0f7be6773mshe378b75d842eb73p13c24fjsn8c61a51aee8d',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
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
