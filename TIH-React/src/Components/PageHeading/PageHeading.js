import React from 'react';

function PageHeading({ pagname }) {
	const styleheader = {
		width: '30%',
		color: 'whitesmoke',
		fontFamily: 'Monospace, Cursive, Sans-serif',
		fontSize: '1.6rem',
		textAlign: 'center',
		marginTop: '1.5rem',
		background:"rgb(57,54,104)",
		background:" linear-gradient(90deg, rgba(57,54,104,1) 1%, rgba(22,107,111,1) 83%, rgba(52,97,160,1) 100%)",
		borderRadius: '0.5rem',
		boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
		webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
		mozkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
	};

	return (
		<div className='container ' style={styleheader}>
			<h1>{pagname}</h1>
		</div>
	);
}

export default PageHeading;
