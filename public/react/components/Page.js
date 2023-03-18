import React from 'react';

export const Page = ({ page, getDetails }) => {
	return (
		<div onClick={() => getDetails(page.slug)}>
			<h3
				style={{
					padding: '1rem',
					margin: '.5rem',
					cursor: 'pointer',
					border: '2px solid black',
				}}
			>
				{page.title}
			</h3>
		</div>
	);
};
