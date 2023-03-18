import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Details } from './Details';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
const initialDetailsState = {
	id: '',
	title: '',
	slug: '',
	content: '',
	status: '',
	createdAt: '',
	updatedAt: '',
	authorId: '',
};
export const App = () => {
	const [pages, setPages] = useState([]);
	const [details, setDetails] = useState(initialDetailsState);

	async function fetchPages() {
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log('Oh no an error! ', err);
		}
	}

	async function getDetails(slug) {
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const detailsData = await response.json();
			setDetails(detailsData);
		} catch (err) {
			console.log('Oh no an error: ', err);
		}
	}

	useEffect(() => {
		fetchPages();
		console.log(details);
	}, []);

	return (
		<main>
			<div
				style={{
					textAlign: 'center',
				}}
			>
				<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
			</div>
			<div
				style={{
					margin: '3rem',
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
					alignContent: 'center',
				}}
			>
				<PagesList pages={pages} getDetails={getDetails} />
				<Details details={details} />
			</div>
		</main>
	);
};
