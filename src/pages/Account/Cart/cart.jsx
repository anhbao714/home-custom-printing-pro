import Navigation from "../../../component/Navigation";
import Footer from "../../../component/Footer";
const Cart = () =>{
    return (
        <div>
             <Navigation></Navigation>
             <div className="body-cart lg:h-[500px] h-[300px] w-full font-barlow">
                 <div className="astcontemt lg:w-[1200px] h-full px-5">
                     <div className="primary-content w-full h-full lg:h-[400px] lg:my-[100px]">
                         <div className="sub w-full h-[300px] lg:h-[400px] py-5">
                            <div className="name-cart w-full h-[260px] lg:h-[400px] p-5 lg:py-[90px] lg:px-[120px]">
                                <h1 className="cart-title w-full h-[35px] text-[27px] lg:text-[30px] text-[#415161] font-semibold mb-[5px]">Cart</h1>
                                <div className=" border-t-[3px] border-y-pink-500 mt-5"></div> 
                                <div className="flex w-full h-[67px] py-[17px]">
                                    <svg className="h-[30px] w-[17px] text-pink-500 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>
                                    <div className="cart-emty w-full h-full flex items-center justify-start text-[17px] text-[#515151]">Your cart is currently empty.</div>
                                </div>  
                                <p className="return-shop w-full h-[45px] my-[25px]">
                                    <a href="/allproducts" className="actionn uppercase text-center text-sm text-[#515151] font-bold py-[13px] px-[10px] border-[2px] border-[rgb(102,101,101)]">Return to shop</a>
                                </p>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
             <Footer></Footer>
        </div>
    )
}
export default Cart;

