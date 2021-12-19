import React from 'react';


function Card({ heading, source, paragraph,button}) {
	return (
		<div className='max-w-sm rounded  shadow-lg   '>
			{source && <img className='w-full h-1/2' src={require(`../../../public/images/${source}`)} alt='Sunset in the mountains' />}
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 flex justify-content-center align-items-center'>{heading}</div>
				<p className='text-gray-700 text-base'>{paragraph}</p>
			</div>
		<div className="flex justify-center align-items-center grid grid-cols-1">
		   { button &&	<button className='bg-blue-800 text-white font-semibold p-2 rounded-lg  hover:bg-blue-400'>Enroll Now</button>}
		</div>
		
		</div>
	);
}

export default Card;
