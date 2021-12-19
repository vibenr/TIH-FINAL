import React from "react";
import {Link} from "react-router-dom";

function RedirectHeader(){


    return (
        <>
 <div className="rounded-lg shadow bg-base-200 drawer h-30">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle"/> 
  <div className="flex flex-col drawer-content">
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label for="my-drawer-1" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div> 
     
      <div className="flex-none hidden lg:block">
        <ul className="menu horizontal text-white">
              <li>
            <a href="/">Home</a>
             </li> 
            <li>
            <Link to="/login/services"><a >Service</a></Link>
             </li> 
            <li>
            <Link to="/login/courses"><a >Courses</a></Link>
             </li> 
            <li>
            <Link to="/login/startup"><a >Startup</a></Link>
             </li> 
        </ul>
      </div>
    </div>
  </div> 

</div>

 </>
    )
}

export default RedirectHeader;