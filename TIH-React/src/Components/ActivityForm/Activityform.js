import React from 'react'
import PageHeading from "../PageHeading/PageHeading";
function Redirectform({pageheading,formname}) {
    return (
<>
<PageHeading pagname={pageheading}/>

<div className="flex justify-center align-items-center ">
  <form className="w-full max-w-lg mt-14" action={`/addform/${formname}`} method="post" enctype="multipart/form-data">
      
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" name="title" placeholder="Enter The Title" required/>
            </div>
        </div>

                
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Description
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 min-w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="description" id="description" type="text" placeholder="Enter The Description"></textarea>
            </div>
        </div>

      

    <div>
        <button className="btn btn-primary text-white p-2 mt-4" type="submit">Submit</button>
    </div>
   
</form>  
</div>
</>
    )
}

export default Redirectform
