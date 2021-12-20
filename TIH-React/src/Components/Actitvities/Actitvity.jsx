import React from 'react';
import Card from '../Card/Card';
import Heading from '../PageHeading/PageHeading';
import Footer from "../Footer/Footer";
import {useState,useEffect} from "react";

function Actitvity() {


const [initial,final]=useState([]);
	useEffect(()=>{
	
		let servicedata=async()=>{
			await fetch(' https://tihbackend.herokuapp.com/api/activity').then(res=>{
				if(res.ok){
					return res.json();
				}
			}).then(jsonres=>final(jsonres))
		
		}
		servicedata();
	
	},[])







	return (
     
<>
	<Heading pagname = "Activities" />
		<div className = "flex items-center justify-center h-full w-full mt-12">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
		
		{	initial && initial.map((card)=>(
			<Card
				heading={card.title}
				paragraph={card.description}
								
			/>
		))
		
		}

		</div>
	
		</div>
		<div className = ""> 
		<Footer />
		</div>
</>
);
}

export default Actitvity;

