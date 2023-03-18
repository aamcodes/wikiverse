import React from 'react';
import { Page } from './Page';

export const PagesList = ({ pages, getDetails }) => {
	console.log(pages);
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h2 style={{ margin: '1rem', textAlign: 'center' }}>Our Pages</h2>

			{pages.map((page, idx) => {
				return <Page page={page} key={idx} getDetails={getDetails} />;
			})}
		</div>
	);
};
