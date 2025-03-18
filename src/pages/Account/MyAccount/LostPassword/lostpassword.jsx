import Navigation from "../../../../component/Navigation";
import Footer from "../../../../component/Footer";
const LostPassword = () => {
    return (
        <div>
             <Navigation></Navigation>
             <div className="myaccount-content w-full lg:h-[770px] h-[550px] md:h-[600px] font-barlow flex justify-center items-center">
                 <div className="sub-content w-full  h-[550px] px-5 lg:mx-auto lg:max-w-[1400px] lg:w-[1240px] flex justify-center items-center">
                   <div className="primary w-full h-full">
                     <div className="main w-full h-full flex justify-center items-center">
                       <div className="my-account w-full h-full lg:px-[115px] lg:py-[90px] flex flex-col items-center justify-center">
                         <div className="header-title w-full h-[40px] mb-2.5 text-[27px] lg:text-[30px] text-[#67727d] font-bold text-left">Lost password</div>
                         <div className="wrap w-full h-[470px] flex flex-col justify-center items-center">
                           <div className="clear w-full h-[400px] flex justify-center items-center">
                             <div className="login w-[570px] h-full p-10 my-[35px] border-[1px] bg-slate-100 flex flex-col justify-center">
                               <p className="w-full h-[90px] text-[15px] lg:text-lg text-[#67727d] mb-[30px] flex justify-start items-center">
                                       Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                                </p>
                               <form action="" className="w-full">
                                 <input type="text" placeholder="Username or email address" required className="User w-full h-[52.2px] border px-[13.6px] py-[15.3px]"/>
                                 <button className=" w-full md:w-[200px] h-[40px] my-[30px] border-2 border-gray-500 text-[#67727d] uppercase">Reset Password </button>
                               </form>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

             <Footer></Footer>
        </div>
    )
}
export default LostPassword;