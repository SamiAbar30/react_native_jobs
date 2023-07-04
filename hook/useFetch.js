import React, { useEffect, useState } from 'react';
import { RapidAPIKey, RapidAPIHost } from '@env';
import axios from 'axios';
function useFetch(endpoint, query) {
	const [data, setData] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState();
	console.log(RapidAPIKey, RapidAPIHost);
	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': RapidAPIKey,
			'X-RapidAPI-Host': RapidAPIHost,
		},
		params: {
			...query,
			// query: 'Python developer in Texas, USA',
			// page: '1',
			// num_pages: '1',
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
			console.log(response.data);
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
	return { data, isloading, error, refetch };
}

export default useFetch;
