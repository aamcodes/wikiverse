import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Details } from './Details';
import { PageForm } from './PageForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { create } from 'react-test-renderer';
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

const initialPageFormState = {
	title: '',
	content: '',
	name: '',
	email: '',
	tags: '',
};

export const App = () => {
	const [pages, setPages] = useState([]);
	const [details, setDetails] = useState(initialDetailsState);
	const [pageFormErrors, setPageFormErrors] = useState('');
	const [pageForm, setPageForm] = useState(initialPageFormState);

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

	async function createPage(page) {
		if (
			!page.title ||
			!page.content ||
			!page.name ||
			!page.email ||
			!page.tags
		) {
			setPageFormErrors('All fields are required!');
		} else {
			const response = await fetch(`${apiURL}/wiki`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pageForm),
			});
			const data = await response.json(); // probably not needed
			fetchPages();
			setPageFormErrors('');
			setPageForm(initialPageFormState);
		}
	}

	async function deletePage(slug) {
		const response = await fetch(`${apiURL}/wiki/${slug}`, {
			method: 'DELETE',
		});
		const data = await response.json(); // probably not needed
		fetchPages();
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main style={{ marginBottom: '300px' }}>
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
				<PagesList
					pages={pages}
					getDetails={getDetails}
					deletePage={deletePage}
				/>
				<Details details={details} />
				<div>
					<h2 style={{ margin: '1rem', textAlign: 'center' }}>
						Create a new Page
					</h2>
					{pageFormErrors && <h3>{pageFormErrors}</h3>}
					<PageForm
						pageForm={pageForm}
						setPageForm={setPageForm}
						createPage={createPage}
					/>
				</div>
			</div>
		</main>
	);
};
