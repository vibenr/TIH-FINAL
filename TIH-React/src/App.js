import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activity from './Components/Actitvities/Actitvity';
import Service from './Components/Services/Service';
import Courses from './Components/Courses/courses';
import Header from './Components/HeaderTop/Header'
import Startup from './Components/Startup/startup';
import About from './Components/About/About';
import Login from './Components/LoginPage/Login';
import Contact from './Components/Contact/Contact';
import Dataform from './Components/DataForms/DataForm';
import HomePage from './Components/HomePage/HomePage';


function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>				
					<Route path="/login/forms">
					<Dataform/>
					</Route>
					
					<Route path="/login">
					<Login/>
					</Route>
				
				
					<Route path='/activities'>
						<Header />
						<Activity />
					</Route>

					<Route path='/services'>

						<Service />
					</Route>

					<Route path='/courses'>
						<Header />
						<Courses />
					</Route>

					<Route path='/startup'>
						<Header />
						<Startup />
					</Route>

					<Route path='/about'>
					<Header />
						<About />
					</Route>

					<Route path='/contact'>
						<Header />
						<Contact />
					</Route>

					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
