import React from 'react'
import RedirectHeader from "../RedirectHeader/RedirectHeader";
import RedirectForm from "../Redirectform/Redirectform";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import PageHeading from "../PageHeading/PageHeading";
import ActivityForm from "../ActivityForm/Activityform"


function DataForm() {
    return (
  <Router>
        <div>
        <RedirectHeader/>
        <Switch>
      <Route path="/login/services">
          <RedirectForm pageheading="Services" formname="services"/>
      </Route>
      
        <Route path="/login/courses">

        <RedirectForm pageheading="Courses" formname="courses"/>
    
        </Route>

        <Route path="/login/activities">

        <ActivityForm pageheading="Activity" formname="activities"/>

        </Route>

        <Route path="/login/startup">

        <RedirectForm pageheading="Startup" formname="startup"/>

        </Route> 

        <Route path="/">
        <div className="flex justify-center align-center mt-20 ">
            <PageHeading pagname="Here You Can Add Your Eventss By Clicking Tabs In Header"/>
        </div>

        </Route> 

       
        
</Switch>
        </div>
   </Router>
    )
}

export default DataForm;
