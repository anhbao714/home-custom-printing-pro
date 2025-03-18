import Navigation from "../../../../component/Navigation";
import Footer from "../../../../component/Footer";
const Login = () => {
    return (
        <div>
            <Navigation></Navigation> 
            <div className="myaccount-content w-full md:h-[770px] h-[550px] font-barlow flex justify-center items-center">
                    <div className="sub-content md:px-5 md:mx-auto md:max-w-[1400px] md:w-[1240px] h-full flex justify-center items-center">
                      <div className="primary w-full h-full">
                        <div className="main w-full h-full flex justify-center items-center">
                          <div className="my-account w-full h-full md:px-[115px] md:py-[90px] flex flex-col items-center justify-center">
                            <div className="header-title w-full h-[40px] mb-2.5 text-[30px] text-[#67727d] font-bold text-left">My account</div>
                            <div className="wrap w-full h-[440px] md:h-[540px] flex flex-col justify-center items-center">
                              <div className="clear w-full h-[440px] md:h-[500px] flex justify-center items-center">
                                <div className="login md:w-[570px] h-full p-5 my-[15px] border-[1px] bg-slate-100 flex flex-col justify-center">
                                  <h2 className="header w-full h-[55px] text-[25px] md:text-[42px] text-[#808285] my-[20px] md:mb-[60px] flex justify-center items-center">Login</h2>
                                  <form action="" className="w-full">
                                    <input type="text" placeholder="Username or email address" required className="User w-full h-[52.2px] border px-[13.6px] py-[15.3px]"/>
                                    <div className="relative w-full my-[30px]">
                                      <input type="password" placeholder="Password" required className="peer w-full h-[52.2px] border px-[13.6px] py-[15.3px] pr-10"/>
                                      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer peer-focus:text-black text-gray-400">👁</span>
                                    </div>
                  
                                    <div className="me w-full h-[30px] flex items-center">
                                      <input type="checkbox" name="Remember me" className="Remember h-full w-[15px] mr-[5px]" id="Remember me" />
                                      <div className="remember-me text-sm font-semibold text-[#67727d]">Remember me</div>
                                    </div>

                                    <button className="w-full h-[40px] my-[30px] border-2 border-black text-[#67727d]">Log In</button>

                                    <p className="w-full h-[30px] flex items-center justify-center">
                                      <a href="/lostpassword" className="text-lg text-[#67727d]">Lost your password?</a>
                                    </p>  
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
export default Login;