import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
export { default as aboutHeader } from './aboutHeader.jpg';
export { default as aboutImg } from './aboutImg.jpg';
export { default as aboutSectionBg } from './aboutSectionBg.jpg';

const AboutHDX = () => {
    return (
        <div>
            <Navigation></Navigation>
             <div className="body-abouthdx h-full font-barlow">
                <div className="slider1-abouthdx relative flex w-full h-[1500px] md:h-[960px] lg:h-[900px]">
                    <div className="img-about w-full h-full">
                        <img className="w-full h-full object-right-top object-cover lg:object-none" src={aboutHeader} alt="slider1" />
                    </div>
                     <div className="content-about absolute text-white h-full lg:h-[900px] md:h-[960px]   w-full p-5">
                        <div className="row border-b-2 h-[450px] lg:h-[600px]">
                           <div className="header-about flex items-center justify-center text-lg font-semibold p-8">-Since 1984-</div>
                           <div className="content-about lg:p-10 pt-[15px] pb-[30px] text-[36px] leading-[1.3] lg:text-8xl font-semibold lg:font-black text-center mb-5 lg:mb-0">
                              We Provide Best-quality Printed Products At Affordable Prices.
                          </div>
                           <div className="action-about flex items-center justify-center my-5">
                            <a href="" className="action-content uppercase text-xs lg:text-base  p-2.5 w-[150px] lg:w-[200px] border-[1px] flex  items-center justify-center space-x-2 ">
                              Explore More
                              <svg className="right-icon h-4 w-4 ml-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                            </a>
                           </div>
                        </div>

                        <div className="row h-[1000px] md:h-[490px] lg:h-[260px] flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row">
                            <div className="column w-full h-1/4 lg:w-1/4 md:h-[245px] lg:h-full p-5">
                                  <div className="row-content1 text-xl lg:text-3xl font-bold text-center md:text-left">Who We Are</div>
                                  <div className="row-content2 my-6 text-[15px] text-center md:text-lg font-medium md:text-left">Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</div>
                            </div>

                            <div className="column w-full h-1/4 lg:w-1/4 md:h-[245px] lg:h-full p-5">
                                  <div className="row-content1 text-xl lg:text-3xl font-bold text-center md:text-left">How It Started</div>
                                  <div className="row-content2 my-6 text-[15px] text-center md:text-lg font-medium md:text-left">Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</div>
                            </div>

                            <div className="column w-full h-1/4 lg:w-1/4 md:h-[245px] lg:h-full p-5">
                                  <div className="row-content1 text-xl lg:text-3xl font-bold text-center md:text-left">Why Choose Us</div>
                                  <div className="row-content2 my-6 text-[15px] text-center md:text-lg font-medium md:text-left">Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro.</div>
                            </div>

                            <div className="column w-full h-1/4 lg:w-1/4 md:h-[245px] lg:h-full p-5">
                                  <div className="row-content1 text-xl lg:text-3xl font-bold text-center md:text-left">How It Works</div>
                                  <div className="row-content2 my-6 text-[15px] text-center md:text-lg font-medium md:text-left">Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro.</div>
                            </div>
                            
                        </div>
                     </div>
                </div>

                <div className="slider2-abouthdx w-full">
                   <div className="ast-abouthdx lg:h-[750px] flex flex-col md:flex-row lg:pt-[100px] px-[30px] md:px-0 lg:mx-[100px]">
                    <div className="column-content w-full h-[574px] lg:h-full lg:w-3/5 md:w-1/2 md:h-[580px] p-5">
                         <div className="row-icon w-full h-[100px] flex items-center justify-center py-5 md:justify-start">
                         <svg className="w-[60px] h-[60px] cursor-pointer text-white bg-red-600 rounded-lg hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                         </div>

                         <div className="row-title w-full h-[100px] lg:h-[120px] leading-[1.3] text-[15px] md:text-[25px] pt-2.5 pb-[30px] text-center lg:text-4xl text-[#415161] font-semibold lg:font-black lg:py-[30px] md:text-left">Best Quality Printed Tshirts And Mugs Very Affordable Price</div>
                   
                         <div className="row-menu w-full flex my-[30px]">
                              <div className="column menu1-column w-1/2 lg:w-1/4 h-full flex items-center justify-start">
                                 <div className="menu-abouthdx1 text-[#67727D] inline-flex flex-col text-lg font-medium">
                                    <a href="" className="cursor-text my-2.5">Personal Gifts</a>
                                    <a href="" className="cursor-text my-2.5">Occasional Gifts</a>
                                    <a href="" className="cursor-text my-2.5">Corporate Gifts</a>
                                </div>
                               </div>

                             <div className="column menu2-column w-1/2 lg:w-1/4  flex items-center justify-start">
                               <div className="menu-abouthdx2 text-[#67727D] inline-flex flex-col text-lg font-medium">
                                  <a href="" className="cursor-text my-2.5">Printed Tshirts</a>
                                  <a href="" className="cursor-text my-2.5">Printed Mugs</a>
                                  <a href="" className="cursor-text my-2.5">Corporate Gifts</a>
                               </div>
                           </div>
                         </div>

                         <div className="row-textline text-[15px] lg:text-lg text-[#67727D] w-full h-[140px] mb-[30px] md:mb-0 md:text-justify text-center font-medium">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</div>
                    </div>

                    <div className="column-img w-full h-[466px] lg:h-full lg:w-2/5 md:w-1/2 md:h-[580px]">
                        <img className="h-full w-full object-contain" src={aboutImg} alt="Slider2" />
                    </div>
                   </div>
                </div>

                <div className="slider3 bg-rose-600 w-full h-[240px] p-[60px] md:p-0 lg:h-[160px] md:h-[140px] flex items-center flex-col md:flex-row">
                    <div className="nav-slider3 flex w-full h-full lg:px-10 flex-col md:flex-row">
                      <div className="column content4-column w-full md:w-1/2 h-1/2 md:h-full flex items-center leading-none text-white text-sm md:text-xl font-semibold md:font-extrabold uppercase">
                        Get Best Offers On All Products!
                      </div>

                     <div className="column button3-column w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-end text-white">
                       <a href="" className="action-content3 w-[150px] h-[40px] p-3 font-bold flex items-center justify-center space-x-2 border-2 text-lg">
                       Visit Store
                      <svg className="right-icon4 h-4 w-4 ml-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                      </a>
                    </div>
                 </div>
                </div>

                <div className="slider4 relative flex">
                    <div className="img h-[400px] md:h-[330px] lg:h-[750px] w-full ">
                        <img className="h-full w-full object-cover object-right-top md:object-right-bottom lg:object-none" src={aboutSectionBg}alt="Aboutt" />
                    </div>

                    <div className="content absolute h-[400px] md:h-[330px] lg:h-[750px] w-full lg:p-[190px] md:py-0 flex px-5 py-[60px] md:px-[50px]">
                        <div className=" w-full md:w-1/2 h-full flex flex-col justify-center text-white">
                            <div className="content-headerhdx lg:h-[80px] w-full text-[25px] lg:text-4xl lg:font-black pb-5 lg:mt-5 font-bold font-barlow">Tshirt Printing Is The New Cool!</div>
                            <div className="content-bodyhdx text-[15px] lg:text-lg text-white text-center md:text-left lg:text-justify mb-10 font-barlow">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</div>
                            <div className="content-actionhdx flex justify-center md:justify-start">
                               <a href="" className="content-actionhdx uppercase p-2.5 w-[200px] flex text-sm border-2 items-center justify-center space-x-2 ">
                                Explore More
                               <svg className="right-icon h-4 w-4 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill="currentColor"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg> 
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            <Footer></Footer>
        </div>
    )
}
export default AboutHDX;