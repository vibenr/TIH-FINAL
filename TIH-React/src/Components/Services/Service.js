import { useState,useEffect } from 'react';
import React from 'react';
import Card from '../Card/Card';
import Heading from '../PageHeading/PageHeading';
import Header from '../HeaderTop/Header';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from "../Footer/Footer";

const style = {
	textAlign: 'center'
};





function Service()
{


const [initial,final]=useState([]);


useEffect(()=>{

	let servicedata=async()=>{
		await fetch(' https://tihbackend.herokuapp.com/api/services').then(res=>{
			if(res.ok){
				return res.json();
			}
		}).then((jsonres)=>
		{

			console.log(jsonres)
			final(jsonres)
		}
		)

	}
	servicedata();

},[])




	return (
	
		<div className='Service'>
			<ChakraProvider>
				<Header />
			</ChakraProvider>
			<Heading pagname='SERVICES' />
			<div className='flex items-center justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
					
					{
				
			     	initial && initial.map((card)=>(
					<Card
					            heading={card.title}
								paragraph={card.description}
								source={card.image}
					/>
					))}	
					
					

				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Service;
