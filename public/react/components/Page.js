import React from 'react';

export const Page = ({ page, getDetails, deletePage }) => {
	return (
		<div
			style={{
				padding: '1rem',
				margin: '.5rem',
				cursor: 'pointer',
				border: '2px solid black',
			}}
		>
			<h3>{page.title}</h3>
			<button onClick={() => getDetails(page.slug)}>
				View Page Details
			</button>
			<button onClick={() => deletePage(page.slug)}>Delete Page</button>
		</div>
	);
};
