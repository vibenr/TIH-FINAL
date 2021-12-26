import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const style = {
	backgroundColor: "#212426"
}

function Footer() {
	return (
		<footer className = "relative bottom-0 w-full">
			<div className='w-full p-4   ' style = {style}>
				<div className='flex justify-center align-items-center'>
					<h1 className='text-xl font-weight-bolder text-white font-semibold'>Join Us</h1>
				</div>

				<div className='JoinUs flex justify-center align-items-center'>
					{/* <ul className=" text-white ">
                    <li>Create Oppourites</li>
                    <li>Offer technical as well as non-technical solutions</li>
                    <li>Support aspiring minds</li>
                </ul>            */}
				</div>

				<div className=' social-icons w-full flex justify-around align-items-center mt-3'>
					<a href='https://github.com/vaibhav-believer' target='_blank'>
						<TwitterIcon color='primary' />
					</a>

					<a href='https://github.com/vaibhav-believer' target='_blank'>
						<YouTubeIcon color='primary' />
					</a>
					<a href='https://github.com/vaibhav-believer' target='_blank'>
						<FacebookIcon color='primary' />
					</a>
					<a href='https://github.com/vaibhav-believer' target='_blank'>
						<LinkedInIcon color='primary' />
					</a>
					<a href='https://github.com/vaibhav-believer' target='_blank'>
						<InstagramIcon color='primary' />
					</a>
				</div>
				<div className='mt-3 flex justify-center align-items-center'>
					<p className='text-white font-semibold text-base '>&copy; 2021 Technoithub, All rights reserved</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
