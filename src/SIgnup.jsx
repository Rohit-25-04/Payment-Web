import React, { useState } from "react";
import Footer from "./Footer";
function Signup(){
    const[text,settext]=useState( 
        {
            fname:'',
            lname:'',
            pnumber:'',
            Email:'',
              address:'',
            message:''
        }
    ) 
    const[test,settest]=useState(false)
    const[error,seterror]=useState({})
    const input=(e)=>{
        const {name,value}=e.target
        

         settext((prevalue)=>({
            ...prevalue,
            [name]:value
         }))
         console.log(text)
    }
    const add=()=>{
        const newerror={}
      if(text.fname.trim()===""){
         
       newerror.fname="enter the fname"
      }
       if(text.lname.trim()===""){
         
       newerror.lname="enter the lname"
      }
       if(!text.pnumber){
        newerror.pnumber="enter the phone number"
      }else if(text.pnumber.length<=10){
newerror.pnumber="enter the valid phone number"
      }
if(!text.Email){
    newerror.email="enter the Email"
}
if(text.address===""){
    newerror.address="emnter your Address"
}
if(!text.message){
    newerror.message="pls write a message"
}
if(!test){
    newerror.test="pls write a message"
}
seterror(newerror)
   if (Object.keys(newerror).length === 0) {
      console.log("Form submitted successfully:", text);
      alert("Signup successful!");
    }
    }
    return(
        <>
        <div className="text-center mb-3 capitalize font-bold">already signin?</div>
        <div className="grid place-content-center">
<div className="flex justify-center gap-3 mb-3">
  <div>   <input 
    className="border"
    onChange={input}
    
    type="text"placeholder=" enter your First Name" 
     name="fname"
    value={text.fname}
    
    /> {error.fname&&<p className="text-red-600">{error.fname}</p>}</div>
  <div>  <input
     className="border" type="text"placeholder=" enter your Last Name"
     onChange={input}
     
    value={text.lname}
    name="lname" />{error.lname&&<p className="text-red-600">{error.lname}</p>}
</div></div> 

<div className="flex justify-center mb-3 gap-3">
  <div>  <input 
    className="border"
    type="text"placeholder=" enter your First Name" 
     onChange={input}
     name="pnumber"
    value={text.pnumber}
    />{error.pnumber&&<p className="text-red-600">{error.pnumber}</p>}</div> 
   <div>  <input
     onChange={input}
     name="Email"
     className="border" type="text"placeholder=" enter your Last Name"
     
    value={text.Email} />  {error.email&&<p className="text-red-600">{error.email}</p>}
</div>
</div> 
<div className="flex justify-center gap-3 ">
  <div> <input 
     onChange={input}
     name="address"
    className="border w-90 md:w-100"
    type="text"placeholder=" enter your First Name" 
     
    value={text.address}
    /> {error.address&&<p className="text-red-600">{error.address}</p>}</div>  
 
</div>
<div className="flex justify-center mt-3 gap-3 ">
  <div>   <input 
     onChange={input}
     name="message"
    className="border w-90 md:w-100"
    type="text"placeholder=" enter your First Name" 
     
    value={text.message}
    />{error.message&&<p className="text-red-600">{error.message}</p>}</div>
 
</div>
<div className="flex gap-3"> 
 <div> <input type="Checkbox"
             checked={test}
            onChange={(e) => settest(e.target.checked)}

  /> <br /><p>i agree that the rohit rawta may conatact me at the Email address or Phone Number abouve</p>
 {error.test&&<p className="text-red-600">{error.test}</p>}</div>

</div>
<button onClick={add}>Submit</button>


        </div>
        <p>{text.fname}</p>
        <p>{text.lname}</p>

  
        </>
    ) 
}export default Signup