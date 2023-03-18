import React from 'react';

export const PageForm = ({ pageForm, setPageForm, createPage }) => {
	const handleChange = (e) => {
		let { name, value } = e.target;
		setPageForm({ ...pageForm, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createPage(pageForm);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					value={pageForm.title}
					onChange={handleChange}
					style={{
						fontSize: '16px',
						padding: '.5rem',
						border: '1px solid grey',
						margin: '.25rem',
					}}
				/>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={pageForm.name}
					onChange={handleChange}
					style={{
						fontSize: '16px',
						padding: '.5rem',
						border: '1px solid grey',
						margin: '.25rem',
					}}
				/>
				<input
					type="text"
					name="email"
					placeholder="email"
					value={pageForm.email}
					onChange={handleChange}
					style={{
						fontSize: '16px',
						padding: '.5rem',
						border: '1px solid grey',
						margin: '.25rem',
					}}
				/>
				<input
					type="text"
					name="tags"
					placeholder="tags"
					value={pageForm.tags}
					onChange={handleChange}
					style={{
						fontSize: '16px',
						padding: '.5rem',
						border: '1px solid grey',
						margin: '.25rem',
					}}
				/>
				<input
					type="text"
					name="content"
					placeholder="content"
					value={pageForm.content}
					onChange={handleChange}
					style={{
						fontSize: '16px',
						padding: '.5rem',
						border: '1px solid grey',
						margin: '.25rem',
					}}
				/>
				<button
					style={{
						padding: '.5rem',
						fontSize: '16px',
						margin: '.25rem',
					}}
				>
					Create Page
				</button>
			</form>
		</div>
	);
};
