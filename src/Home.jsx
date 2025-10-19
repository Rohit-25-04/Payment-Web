 import React from "react";
 import Contact from "./Contact";
 import DownloadIcon from "@mui/icons-material/Download";
import ScreenShareIcon from "@mui/icons-material/Monitor";
  import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
 import IdentityIcon from "@mui/icons-material/VerifiedUser";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Footer from "./Footer"; 

 import WORK from "./images/work.jpeg";
import SignupPage from "./SIgnup";
function Home() {
  return (<>
    <div className="flex  mt-8 flex-col-reverse  md:flex-row justify-evenly  h-230 md:h-120  bg-blue-200 gap-17 w-full flex-wrap p-5">
      
      {/* Left Section */}
      <div className="w-full md:w-80 h-auto px-3">
        <h1 className="font-bold text-2xl">
          Online Payment Made Easy For You
        </h1>
        <p className="mt-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
          necessitatibus quam illum saepe quod doloribus.
        </p>

        <h2 className="text-2xl font-semibold mt-5">Early Access For You</h2>

        <div className="border flex items-center gap-2 w-full sm:w-72 rounded-2xl bg-white shadow-xl h-10 px-3 mt-3">
          <input
            className="flex-1 outline-none text-sm"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-blue-400 text-white rounded-2xl px-4 py-1 hover:bg-blue-500 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-3 w-full md:w-60 h-60 flex justify-center">
        <div className="relative w-full max-w-[14rem] h-40 md:55">
          <img
            className="absolute top-30 md:top-20 left-0 w-full h-full object-cover rounded-lg"
            src="https://tse1.mm.bing.net/th/id/OIP.X_rMGjV-QFVMxh3aeOD1HAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Payment Illustration 1"
          />
          <img
            className="absolute top-0 left-18 md:left-10 w-full  h-full object-cover opacity-75 rounded-lg"
            src="https://tse1.mm.bing.net/th/id/OIP.vZN1LaaGq-1ImetbYy-HuAHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Payment Illustration 2"
          />
        </div>
      </div>
    </div>

<div className="   flex justify-center  bg-red-600">
  <div className="border md:ml-80 pt-9    md:w-200 md:h-60  bg-white rounded-2xl shadow-2xl absolute top-230  md:top-130  md:left-0  "style={{boxShadow:"0 0 8px 8px rgba(0, 0 ,0,0.3)"}}>
    
    <h1 className="text-2xl text-center">How does it works</h1>
    <div className="w-full p-3 gap-6 border flex  justify-evenly">
     <div className="ml-4">
    <span></span>  <h1 className=" border ml-9 h-7 w-7 text-center rounded-full"><DownloadIcon /></h1>
    <h1 className="font-medium">Download App</h1>
    <p className=" mt-2 md:break-after-column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate  voluptatum ad in quas  ?</p></div>  
<div>
  <h1 className="  border ml-9 h-7 w-7 text-center rounded-full"><ScreenShareIcon /></h1>
   <h2 className=" font-medium">Complete The INstruction</h2>
   <p className=" mt-2 md:break-after-column"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas   !</p>
</div>
<div>
  <h1 className=" border ml-9 h-7 w-7 text-center rounded-full">
    < AttachMoneyIcon /></h1>
   <h2 className="font-medium">Complete The INstruction</h2>
   <p className=" mt-2 md:break-after-column">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas   !
     </p>
</div>

    </div>
    
     </div>
</div>
 
<div className="border  p-3 mt-78 md:mt-60">
  <h1 className="text-center">--Avaivlable In playstore and App store</h1>
 <div className=" flex gap-12 md:gap-20 md:justify-center ">
  <div className="w-90 h-38  border"><img className=" h-full w-full object-cover " src={WORK}/> </div>
   
 
 <div><h1 className=" font-bold mb-5">How To Use The App ?</h1>  
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">1</h1></div> 
<div className=" mb-1"><h2 className="font-medium mb-1">Signin</h2> 
<p>Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div>
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">2</h1></div> 
<div className=""><h2 className="font-medium mb-1">Add Your Bank Account</h2> 
<p className="mb-1">Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div> 
{/* payment req */}
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">2</h1></div> 
<div className=""><h2 className="font-medium mb-1">Send Payment Request</h2> 
<p>Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div>
 <button className="  border-2 border-black p-1   rounded-2xl text-center text-blue-500">Learn More</button>
 </div> </div>
 
  </div><div>
</div>
{/* support any language box */}
<div className="border  p-3 mt-3 md:mt-6">
  <h1 className="text-center">--A Support In Any Language</h1>
 <div className=" flex flex-row-reverse gap-12 md:gap-20 md:justify-center ">
  <div className="w-90 h-38  border"><img className=" h-full w-full object-cover " src={WORK}/> </div>
   
 
 <div><h1 className=" font-bold mb-5"> World Class Support is Availabe 24/7 ?</h1>  
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">1</h1></div> 
<div className=" mb-1"><h2 className="font-medium mb-1">Signin</h2> 
<p>Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div>
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">2</h1></div> 
<div className=""><h2 className="font-medium mb-1">Add Your Bank Account</h2> 
<p className="mb-1">Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div> 
{/* send service box */}
<div className="flex gap-5 "><div>  <h1 className=" h-7 bg-amber-800 border w-7 rounded-full grid place-content-center">2</h1></div> 
<div className=""><h2 className="font-medium mb-1">Send Payment Request</h2> 
<p>Lorem ipsum  nostrum maxime corporis nobis expedita pariatur culpa quas.</p>
</div></div>
 <button className="  border-2 border-black p-1   rounded-2xl text-center text-blue-500">Learn More</button>
 </div> </div></div>
<div > <h1 className="text-center mb-4">how to send money</h1> 
{/* box 1 */}
 <div className="flex justify-center gap-7 flex-wrap mb-8"> <div  className="transition-transform hover:bg-blue-100 hover:translate-x-2 hover:-translate-y-2 ease-in-out rounded-2xl shadow-2xl  md:w-66 w-44 h-50 border"
   style={{ boxShadow: "0 0 4px 8px rgba(0, 0, 0, 0.3)" }}
>
 <div className="ml-4">
    <span></span>  <h1 className=" bg-blue-400 border ml-9 h-7 w-7 text-center rounded-full"><DownloadIcon /></h1>
    <h1 className="font-medium">Download App</h1>
    <p className="font-extralight mt-2 md:break-after-column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate  voluptatum ad in quas  ?</p></div>  

 </div>
 {/* box 2 */}  <div  className=" rounded-2xl shadow-2xl  md:w-66 w-44 h-50  hover:bg-blue-100 border transition-transform hover:translate-x-2 hover:-translate-y-2 ease-in-out"
   style={{ boxShadow: "0 0 4px 8px rgba(0, 0, 0, 0.3)" }}
>
 <div className="ml-4">
    <span></span>  <h1 className="bg-blue-400 border ml-9 h-7 w-7 text-center rounded-full"><IdentityIcon /></h1>
    <h1 className="font-medium">Download App</h1>
    <p className="font-extralight mt-2 md:break-after-column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate  voluptatum ad in quas  ?</p></div>  

 </div>
 {/* box 3 */}
  <div  className=" rounded-2xl shadow-2xl  md:w-66 w-44 h-50 border transition-transform hover:bg-blue-100 hover:translate-x-2 hover:-translate-y-2 ease-in-out"
   style={{ boxShadow: "0 0 4px 8px rgba(0, 0, 0, 0.3)" }}
>
 <div className="ml-4">
    <span></span>  <h1 className="bg-blue-400 border ml-9 h-7 w-7 text-center rounded-full"><CreditCardIcon/></h1>
    <h1 className="font-medium">Download App</h1>
    <p className="font-extralight mt-2 md:break-after-column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate  voluptatum ad in quas  ?</p></div>  

 </div> 
 {/* box4 */}
  <div  className=" rounded-2xl shadow-2xl  md:w-66 w-44 h-50 border hover:bg-blue-100  transition-transform hover:translate-x-2 hover:-translate-y-2 ease-in-out" 
   style={{ boxShadow: "0 0 4px 8px rgba(0, 0, 0, 0.3)" }}
>
 <div className="ml-4">
    <span></span>  <h1 className="bg-blue-400 border ml-9 h-7 w-7 text-center rounded-full"><AttachMoneyIcon /></h1>
    <h1 className="font-medium">Download App</h1>
    <p className=" font-extralight mt-2 md:break-after-column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate  voluptatum ad in quas  ?</p></div>  

 </div>
 </div>
 
 </div>


 <SignupPage />
 
 <Contact />
  <Footer />
     </>
  );
}

export default Home;
