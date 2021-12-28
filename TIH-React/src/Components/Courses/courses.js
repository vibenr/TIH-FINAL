import React from 'react';
import {useState,useEffect} from "react";
import Card from '../Card/Card';
import Heading from '../PageHeading/PageHeading';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../HeaderTop/Header';
import Footer from '../Footer/Footer';
function Service() {




	const [initial,final]=useState([]);


	useEffect(()=>{
	
		let servicedata=async()=>{
			await fetch(' https://tihbackend.herokuapp.com/api/courses').then(res=>{
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
		<div className='courses '>
			<Heading pagname='Courses' />
			<div className='flex items-center justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 mb-auto'>
					
					
					
					{
						initial && initial.map((card)=>(
							<Card
								heading={card.title}
								paragraph={card.description}
								source={card.image}
								button
							/>

						))
					}
					
					

				{/* 	<Card
						heading='C, C++'
						paragraph='Techno IT Hub presents the C language Course which will be for the beginners in Programming World and lay the strong foundation of the programming'
						source='http://www.technoithub.in/static/assets/img/services/c-2.jpg'
						button
					/>

					<Card
						heading='Java'
						paragraph='Techno IT Hub presents the java Course where you will learn the basics of programming and Java and then learn important concepts and program in Java'
						source='http://www.technoithub.in/static/assets/img/services/c-3.png'
						button
					/> */}
				</div>
			</div>
			<div className='absolute  w-full'>
				<Footer />
			</div>
		</div>
	);
}

export default Service;
