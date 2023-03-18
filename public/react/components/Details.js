import { title } from 'process';
import React from 'react';

export const Details = ({ details }) => {
	return (
		<>
			<div style={{ width: '400px' }}>
				<h2 style={{ margin: '1rem', textAlign: 'center' }}>Details</h2>
				{details.title ? (
					<div>
						<h3>Title: {details.title}</h3>
						<p>ID: {details.id}</p>
						<p>Author ID: {details.authorId}</p>
						<p>Status: {details.status}</p>
						<p>Slug: {details.slug}</p>
						<p>Content: {details.content}</p>
						<p>Created At: {details.createdAt}</p>
						<p>Updated At: {details.updatedAt}</p>
					</div>
				) : (
					<div style={{ marginTop: '40%' }}>
						<h3 style={{ textAlign: 'center' }}>
							Click on a page to get details!
						</h3>
					</div>
				)}
			</div>
		</>
	);
};
