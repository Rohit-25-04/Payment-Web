import React from "react";
import { Link } from "react-router-dom";
function Links(){
    return(
        <><div className="flex justify-between p-2 w-full md:w-full h-auto  bg-blue-200"> 
         <h1 className=" mr-3  w-full text-amber-200 font-bold md:text-2xl md:ml-5">MYPAY</h1>  
        <div className="flex w-full  gap-3 md:gap-14 font-extralight md:ml-80 "> <Link to="/">Home</Link>
         <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
           <Link to="/about">ABout</Link> 
             <Link to="/signup"><h1 className="bg-amber-400 border rounded-2xl w-18">SingUp</h1> </Link>
 </div>
        </div>
        </>
    )
}export default Links