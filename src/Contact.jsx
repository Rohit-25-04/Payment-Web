import React from "react";
function Contact(){
const add=()=>{
    console.log("hello ")
}

    return(
<>
<div className=" w-full h-full  p-6 md:p-11 ">
<div className=" md:ml-60 h-auto md:w-4xl mt-12 p-4 shadow-2xl  rounded-2xl  border" style={ { boxShadow:" 0 0 4px 8px rgba(0,0,0,0.2)"}}>
  
  
    <div className="text-center " ><h1 className="text-center text-blue-500 font-semibold text-2xl capitalize">Contact us</h1>
    <p className=" capitalize">We'd love to hear you! fill out the form below</p>
    </div>
{/* input boxes */}
<div className="text-center "> 
<p>name</p>
<input  className="border w-full" type="text" placeholder=""/>
</div>
<div className="text-center">
    <h3>Email</h3>
    <input className="border w-full" type="text" placeholder=""/>
</div>

<div className="text-center">
    <h3>Message</h3>
    <input className="border w-full h-40" type="text" placeholder=""/>
</div>
<button onClick={add} className=" w-full bg-blue-600 mt-3"><h1>Submit</h1></button> 

 <div className="h-full border-b-2 mt-4"></div>
<div className=" text-center">
<h1 className=" capitalize text-2xl mb-3">other ways to reach us</h1>
<p>📍 address:123 Nimbuchour Kotdwara uttarakhand</p>
<p className="mr-19">📞Phone: +91 8077176765</p>
<p>📧 Email:rohiirwt08@gmail.com</p>
</div>

</div>

</div>


</>

    )
}export default Contact