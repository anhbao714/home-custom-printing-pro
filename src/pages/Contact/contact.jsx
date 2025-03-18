import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
const Contact = () => {
    return (
       <div>
           <Navigation></Navigation>
            <div className="body-contact font-barlow">
               <div className="slider1 w-full lg:h-[820px] md:h-[600px] flex justify-center">               
                 <div className="body-contact w-full lg:h-[820px] md:h-[600px]  flex justify-center">
                   <div className="sub-contact w-full max-w-[1400px] lg:mx-auto md:px-[50px] md:pt-[50px] md:pb-[120px] lg:px-[160px] lg:py-[200px] flex flex-col md:flex-row md:justify-between">
                     
                     {/* Cột 1 */}
                     <div className="column1-contact w-full md:w-2/5 lg:h-full h-[240px] md:h-[430px] flex flex-col px-5">
                       <div className="hello-contact text-[38px] md:text-[46px] lg:text-7xl text-[#415161] text-left w-full h-[130px] flex items-center font-black">
                         Say Hello.
                       </div>
                       <div className="title-contact text-lg text-[#67727D] text-left py-2.5">
                         Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi Neque porro quis quam est.
                       </div>
                       <div className="address-contact text-xl text-[#415161] text-left font-semibold lg:font-bold py-2.5">
                         212 7th St SE, Washington, DC 20003, USA
                       </div>
                       <div className="info-contact text-xl text-[#415161] text-left  font-semibold lg:font-bold py-2.5">
                         info@example.com
                       </div>
                     </div>

                     {/* Cột 2 - Bản đồ */}
                     <div className="column2-contact w-full md:w-3/5 lg:h-full h-[400px] md:h-[430px] font-barlow md:mt-0 mt-10 lg:mt-0">
                       <div className="map w-full h-[400px] lg:h-full">
                         <iframe 
                           className="w-full h-full border-0 rounded-lg"
                           loading="lazy"
                           allowFullScreen
                           referrerPolicy="no-referrer-when-downgrade"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.417024899854!2d-0.1277583842299049!3d51.50735057963543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b32907c5833%3A0xf1ff93b41fc1f1d1!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1707404200000!5m2!1sen!2s"
                           title="Bản đồ Luân Đôn">
                         </iframe>
                       </div>
                     </div>
               
                   </div>
                 </div>
               </div>

             <div className="slider2 w-full lg:h-[870px] flex justify-center">
                 <div className="e-chirld-contact w-full lg:h-[870px] max-w-[1400px] lg:mx-auto lg:px-[160px] pb-[100px]">
                   <div className="row12 w-full lg:h-[570px] flex items-center justify-center mb-[100px] lg:mb-0">
                     <div className="message wlg:w-1/2 h-[470px] lg:mb-[100px] p-[30px] bg-slate-100">
                       <div className="send text-xl lg:text-3xl text-gray-700 w-full h-[40px] font-extrabold lg:text-center text-left">
                           Send Us A Message
                       </div>
                       <form action="">
                         <div className="row-send1 w-full h-[60px] py-[10px] flex">
                           <div className="column-firstname w-1/2 h-[40px] pr-2.5">
                             <input type="text" placeholder="FirstName" required className="form-control w-full h-full p-[12.75px]"/>
                           </div>
                           <div className="column-lastname w-1/2 h-[40px] pl-2.5">
                             <input type="text" placeholder="LastName" required className="form-control w-full h-full p-[12.75px]"/>
                           </div>
                         </div>
                         <div className="row-send2 w-full h-[60px] py-[10px]">
                           <input type="email" placeholder="Email" required className="form-email w-full h-full p-[12.75px]"/>
                         </div>
                         <div className="row-send3 w-full h-[60px] py-[10px]">
                           <input type="text" placeholder="Subject" required className="form-subject w-full h-full p-[12.75px]"/>
                         </div>
                         <div className="row-send4 w-full h-[120px] py-[10px]">
                           <textarea placeholder="Message" className="form-message w-full h-full p-[12.75px] outline-none resize-none leading-normal overflow-hidden focus:rounded-sm focus:ring-2 focus:ring-black">               </textarea>
                         </div>
                         <div className="row-send5 w-full h-[60px] py-[10px]">
                           <input type="submit" value="SEND MESSAGE" className="uppercase p-2.5 w-[140px] h-full flex border-[2px] text-xs text-gray-700 border-gray-700 items-center justify-center space-x-2 cursor-pointer"/>
                         </div>
                       </form>  
                     </div>
                   </div>

                   <div className="row13 w-full md:h-[100px] lg:h-[160px] h-[210px] flex justify-between flex-col md:flex-row">
                     <div className="column-123 md:w-1/3 h-1/3 md:h-full">
                       <div className="business w-full h-full md:p-5">
                         <div className="row-business w-full h-[20px] text-lg md:text-2xl text-[#67727d] flex justify-center items-center font-semibold">
                             Business
                         </div>
                         <div className="row-numbers w-full h-[25px] md:h-[40px] text-xl lg:text-[40px] lg:mt-5 text-[#67727d] flex justify-center items-center font-bold">
                             123 4567 890
                         </div>
                       </div>
                     </div>
                     <div className="column-234 w-full md:w-1/3 h-1/3 md:h-full">
                       <div className="orders w-full h-full md:p-5">
                         <div className="row-orders w-full h-[20px] text-lg md:text-2xl text-[#67727d] flex justify-center items-center font-semibold">
                             Orders
                         </div>
                         <div className="row-numbers w-full h-[25px] md:h-[40px] text-xl lg:text-[40px] lg:mt-5 text-[#67727d] flex justify-center items-center font-bold">
                             123 4567 890
                         </div> 
                       </div>
                     </div>
                     <div className="column-345 w-full md:w-1/3 h-1/3 md:h-full">
                       <div className="support w-full h-full md:p-5">
                         <div className="row-support w-full h-[20px] text-lg md:text-2xl text-[#67727d] flex justify-center items-center font-semibold">
                             Support
                         </div>
                         <div className="row-numbers w-full h-[25px] md:h-[40px] text-xl lg:text-[40px] lg:mt-5 text-[#67727d] flex justify-center items-center font-bold">
                             123 4567 890
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
export default Contact;