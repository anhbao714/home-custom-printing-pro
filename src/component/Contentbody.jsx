import { useState } from "react";
import { products } from "../data/products";
import {
  aboutHeader,
  banner1,
  banner2,
  content1,
  slider3,
  hdx,
  mug3,
  mug1,
  mug2,
  mug4,
  plusIcon,
  aboutImg,
} from "../assets";

export default function Body() {
  const [categoryFilter, setCategoryFilter] = useState("Tshirts");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="Container-content  ">
      <div className="slider1 w-full mt-5 md:mt-0">
        <div className="flex flex-col md:flex-row lg:m-9 md:h-[572px] h-[580px]">
          <div className="column content1-column w-full h-[200px] md:w-6/12 md:p-[50px] md:h-full ">
            <div className="content-header text-[30px] md:text-[46px] lg:text-[70px] font-semibold md:font-bold text-slate-600 text-center md:text-left">
              Customized Printed Tees
            </div>

            <div className="content-sub-header text-sm text-center md:text-left text-slate-600 mb-5 md:mb-14 md:text-base">
              Nam at congue diam etiam erat lectus, finibus eget commodo quis,
              congue diam etiam erat lectus.
            </div>

            <div className="explore flex items-center justify-center md:flex md:justify-start md:items-center ">
              <a
                href=""
                className="action-content1 text-xs uppercase p-2.5 w-[200px] flex items-center justify-center space-x-2 border-[3px] border-[white] "
              >
                <svg
                  className="right-icon text-[10px] h-4 w-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
                Explore Store
              </a>
            </div>
          </div>
          <div className="column picture-column flex justify-center items-center w-full h-[380px] md:6/12 md:h-full">
            <img
              className="w-full h-full md:w-[600px]"
              src={content1}
              alt="Picture-content1"
            />
          </div>
        </div>
      </div>

      <div className="slider2 lg:py-28 lg:mx-20">
        <div className="card-container w-full md:h-[1200px] lg:h-[600px]  ">
          <div className="row card-container1 md:flex-wrap  md:flex md:h-1/2 grid grid-cols-1 lg:grid-cols-4 ">
            <div className="column1 lg:w-1/4 md:w-1/2 relative flex items-center justify-center md:h-[300px] h-[200px] lg:h-full">
              <img
                className="md:h-full w-full h-[200px] opacity-25 object-contain"
                src={hdx}
                alt="HDX"
              />
              <div className="texttt w-full md:h-full h-[200px] absolute z-1">
                <p className="textttt md:h-full w-full h-[200px] text-slate-500 px-10 text-center py-[60px] text-lg flex items-center justify-center">
                  {" "}
                  Best quality printed tshirts and mugs for all your needs
                </p>
              </div>
            </div>

            <div className="column2 lg:w-1/4 md:w-1/2 md:h-[300px] h-[270px] w-full lg:h-full">
              <img
                className="h-full w-full opacity-100 object-cover"
                src={banner2}
                alt="Banner2"
              />
            </div>

            <div className="column3 lg:w-1/2 relative flex w-full md:h-[300px] h-[330px] lg:h-full">
              <img className="h-full w-full" src={banner1} alt="Banner1" />

              <div className="arrive-store absolute w-full md:h-full h-[330px] flex">
                <div className="column-arrive1 w-1/2 h-full"></div>
                <div className="column-arrive2 w-1/2 h-full lg:py-10 lg:pr-10 py-[100px]">
                  <p className="lg:text-[33px] text-[25px] text-[#808285] font-bold mb-[15px]">
                    Get Printed T-shirt @ $25!
                  </p>
                  <div className="w-2/3 md:w-3/5 h-[35px]">
                    <a
                      href=""
                      className="visit-store1 w-full text-xs text-[#6d6767] uppercase py-[10px] flex items-center justify-center border-[2px] border-[#757070]"
                    >
                      <svg
                        className="right-icon h-4 w-4 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                      </svg>
                      Visit Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row card-container2 md:flex md:h-1/2 grid grid-cols-1 flex-wrap lg:grid-cols-4">
            <div className="column1 w-full lg:w-1/4 md:w-1/2 md:h-[300px] relative flex h-[400px] lg:h-full ">
              <img
                className="h-full w-full brightness-50 opacity-40 "
                src={mug1}
                alt="Mug1"
              />
              <div className="visit absolute w-[300px] h-[170px] py-[20px] px-[30px]  lg:h-[300px] lg:w-full lg:p-5 text-xl text-[#415161] lg::flex lg:flex-col lg:justify-between">
                <p className="line text-[20px] lg:text-[30px] capitalize leading-[1.3em] w-full font-semibold lg:font-black lg:flex lg:justify-center lg:items-center mb-[30px] mt-[30px] lg:mb-[80px] flex-grow">
                  Get Printed Mug @ $15!
                </p>
                <div className="w-[280px] h-[30px] lg:w-full lg:h-[40px]">
                  <a
                    href=""
                    className="visit-store2 w-[130px] lg:w-full text-xs  text-[#415161] uppercase py-[10px] flex items-center justify-center border-[2px] border-[#415161]"
                  >
                    <svg
                      className="right-icon h-4 w-4 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                    </svg>
                    Visit Store
                  </a>
                </div>
              </div>
            </div>

            <div className="column2 md:w-1/2 md:h-[300px] lg:w-1/4 w-full  lg:h-full h-[270px]">
              <img
                className="w-full h-full lg:h-full lg:w-full lg:object-scale-down object-cover [object-position:top] "
                src={aboutImg}
                alt="About-img"
              />
            </div>

            <div className="column3 md:w-1/2 md:h-[300px] lg:w-1/4 w-full lg:h-full h-[270px]">
              <img
                className="w-full h-full lg:h-full lg:w-ful object-cover [object-position:center]"
                src={mug2}
                alt="Mug2"
              />
            </div>

            <div className="column4 md:w-1/2 md:h-[300px] lg:w-1/4 lg:h-full w-full h-[190px] py-10 lg:py-0">
              <div className="plus-icon w-full h-full p-5 flex flex-col items-center justify-center">
                <img
                  className="m-2 h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] object-center"
                  src={plusIcon}
                  alt="Plus-Icon"
                />
                <p className="Plus-icon-content uppercase font-bold text-gray-800 text-center">
                  Get Your Own
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider3">
        <div className="body-slider3 flex flex-col md:flex-row w-full h-[500px] md:h-[400px] bg-white">
          <div className="column img3-column w-full h-[270px] pt-[50px] lg:w-1/2 md:h-full lg:ml-20">
            <img
              className="h-full w-[400px] px-[7px] "
              src={slider3}
              alt="Slider3"
            />
          </div>

          <div className="column content3-column w-full h-[230px] md:w-1/2 md:h-full flex flex-col justify-center md:px-6 md:mr-20">
            <div className="color-month text-center md:text-left">
              <div className="header-slider3 uppercase text-2xl font-bold text-gray-600">
                #ColorOfTheMonth
              </div>
              <div className="sub-slider3 text-gray-600 py-10 text-sm flex justify-between items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <div className="footer-slider3 uppercase text-xl font-bold text-gray-600">
                Just $35!!!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider4 bg-rose-600 w-full h-[260px] md:h-[160px] flex items-center ">
        <div className="nav-slider4 flex w-full px-10 py-[30px] md:py-0  flex-col md:flex-row">
          <div className="column content4-column w-full h-[100px] lg:w-6/12 flex items-center justify-center text-white text-xl font-semibold md:font-extrabold uppercase">
            Grab This Limited Time Offer
          </div>

          <div className="column button4-column w-full h-[100px] md:w-6/12 flex items-center justify-center md:justify-end text-white">
            <a
              href=""
              className="action-content4 text-xs w-[150px] p-3 font-bold flex items-center justify-center space-x-2 border-2"
            >
              Order now
              <svg
                className="right-icon4 text-[10px] h-4 w-4 ml-1 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="slider5 w-full  lg:h-[1000px] py-[100px]">
        <div className="row w-full h-[100px] flex items-center justify-center font-black text-neutral-700 mb-[100px]">
          <p className=" slider5-header md:text-[42px] text-[25px] ">
            Featured Products
          </p>
        </div>

        <div className="row list-gift text-base  w-full h-[60px] flex items-center font-bold pl-[24px] text-zinc-600">
          <div
            className={`Tshirts p-6 cursor-pointer ${
              categoryFilter === "Tshirts" ? "text-black" : ""
            }`}
            onClick={() => setCategoryFilter("Tshirts")}
          >
            Tshirts
          </div>
          <div
            className={`Mugs p-6 cursor-pointer ${
              categoryFilter === "Mugs" ? "text-black" : ""
            }`}
            onClick={() => setCategoryFilter("Mugs")}
          >
            Mugs
          </div>
        </div>

        <div className="row product w-full h-[2300px] md:h-[1135px] lg:h-[500px] flex p-5">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 px-4 w-full">
            {products
              .filter((product) => {
                if (categoryFilter === "Tshirts") {
                  return product.category === "Tshirts";
                } else if (categoryFilter === "Mugs") {
                  return (
                    product.category === "Mugs" &&
                    [7, 8, 9, 11].includes(product.id)
                  );
                } else {
                  return true;
                }
              })
              .slice(0, 4)
              .map((product) => (
                <div
                  key={product.id}
                  className="column product-column w-full h-full px-2"
                >
                  <div className="row img-product relative">
                    <img
                      className="shirt__img w-full h-full cursor-pointer"
                      src={product.image}
                      alt={product.name}
                    />
                    <div
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsOpen(true);
                      }}
                      className="overview z-1  w-full h-[30px] absolute bg-gray-700 cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bottom-0"
                    >
                      <button className="quickview text-white block text-center">
                        Quick view
                      </button>
                    </div>
                    {product.sale && (
                      <div className="absolute top-[-10px] right-[-10px] w-[35px] h-[35px] bg-red-500 text-white flex items-center justify-center rounded-full shadow-lg">
                        <span className="text-sm font-bold">sale!</span>
                      </div>
                    )}
                  </div>
                  <div className="row info-product text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="name-product py-4 text-gray-600">
                      {product.category}
                    </div>
                    <div className="color-product my-4 font-bold text-gray-800">
                      {product.name}
                    </div>
                    <div className="review-rating flex items-center justify-center mb-4 space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="icon-star h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="#FFFFFF"
                            stroke="#808080"
                            strokeWidth="35"
                            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="price flex items-center justify-center mb-5 font-semibold">
                      {product.sale ? (
                        <>
                          <div className="original-price line-through text-gray-400 mr-2">
                            {product.originalPrice}
                          </div>
                          <div className="sale-price text-zinc-700">
                            {product.salePrice}
                          </div>
                        </>
                      ) : (
                        <div className="sale-price text-zinc-700">
                          {product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="slider6 w-full h-[200px] md:h-[500px] md:px-5 md:mb-[200px]">
        <div className="preview relative">
          <img
            className="preview__img z-0 h-[200px] md:h-[500px] w-full object-cover relative"
            src={banner2}
            alt="image"
          />
          <div className="preview__overlay z-1 left-0 bottom-0 absolute w-full h-[200px] md:h-full">
            <div className="flex flex-wrap justify-between items-center h-full md:h-[500px] md:justify-end ">
              <div className="module-link md:w-1/3 flex w-full h-full pt-[100px] pl-5 py-5 md:h-full items-center text-white md:pt-[350px] md:pb-[50px] ">
                <svg
                  className="icon-play w-20 h-16 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" />
                </svg>
                <div className="infobox font-bold cursor-pointer">
                  <p className="text-lg ">Watch</p>
                  <p className="text-lg ">Intro video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider7 lg:h-[650px] flex lg:mx-[40px] md:h-[400px] flex-col md:flex-row">
        <div className="column content7-column w-full md:w-1/2 md:h-[400px] h-[330px] px-10 pt-[60px] pb-[30px] flex flex-col items-center text-center lg:h-full lg:w-6/12 lg:p-[60px] lg:items-start lg:text-left">
          <div className="content7-header text-[25px] font-semibold lg:text-[50px] lg:leading-[1.15] lg:font-bold text-slate-600 lg:mb-4">
            Hundreds Of Ready Designs To Choose From
          </div>
          <div className="content7-sub-header text-base h-[75px] text-slate-600 my-5 lg:mb-14">
            Nam at congue diam etiam erat lectus, finibus eget commodo quis,
            congue diam etiam erat lectus.
          </div>
          <a
            href=""
            className="action-content7 uppercase p-2.5 h-[50px] w-[200px] flex items-center justify-center space-x-2 text-gray-500 mx-auto lg:mx-0"
          >
            <svg
              className="right-icon h-4 w-4 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
            </svg>
            Explore Designs
          </a>
        </div>

        <div className="column img7-column md:w-6/12 lg:h-full md:h-[400px] h-[414.4px] w-full">
          <img className="h-full w-full" src={mug3} alt="Mug3" />
        </div>
      </div>

      <div className="slider8 flex lg:py-[50px] flex-col lg:flex-row ">
        <div className="column img8-column w-full h-[250px] lg:w-6/12 lg:h-[550px] relative">
          <img
            className="h-full w-full object-cover"
            src={aboutHeader}
            alt="img8"
          />
          <div className="buy-products absolute inset-0 flex flex-col w-full h-[250px] lg:h-[550px] bg-gray-900 bg-opacity-50 text-white lg:p-[100px]">
            <div className="header_buy-products text-[25px] m-5 mb-0 lg:text-[46px] lg:mb-2 lg:mx-0 font-bold text-center md:text-left">
              {" "}
              Printed Tshirt For $25!
            </div>
            <div className="sub-header_buy-products text-[15px] text-center m-5 lg:mt-0 lg:mx-0 md:text-left  lg:text-xl md:mb-[50px]">
              {" "}
              Nam at congue diam. Etiam erat lectus, finibus eget commodo.
            </div>
            <a
              href=""
              className="action-content8 uppercase p-2.5 w-[200px] md:text-left md:ml-5 flex items-center justify-center space-x-2 border-[3px] border-[white] text-white mx-auto lg:mx-0"
            >
              <svg
                className="right-icon h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
              Order Now
            </a>
          </div>
        </div>

        <div className="column mug8-column w-full h-[250px] lg:w-6/12 lg:h-[550px] relative">
          <img
            className="h-full w-full object-cover [object-position:top] lg:object-none"
            src={mug4}
            alt="mug4"
          />
          <div className="buy-mugs absolute inset-0 flex flex-col w-full h-[250px] lg:h-[550px] bg-white bg-opacity-50 text-[#415161]  lg:p-[100px]">
            <div className="header_buy-mugs text-[25px] m-5 mb-0 lg:text-[46px] lg:mb-2 lg:mx-0 font-bold text-center md:text-left">
              Printed Mug For $15!
            </div>
            <div className="sub-header_buy-mugs text-[15px] text-center m-5 lg:mt-0 lg:mx-0 md:text-left  lg:text-xl md:mb-[50px]">
              {" "}
              Nam at congue diam. Etiam erat lectus, finibus eget commodo quis.
            </div>
            <a
              href=""
              className="action-content8- uppercase md:text-left md:ml-5 p-2.5 w-[200px] flex items-center justify-center space-x-2 border-[3px] border-[#415161] text-[#415161] mx-auto lg:mx-0 "
            >
              <svg
                className="right-icon h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
              Explore Designs
            </a>
          </div>
        </div>
      </div>

      <div className="Modal">
        {isOpen && selectedProduct && (
          <div className="modal z-[100] overflow-y-auto overflow-x-hidden fixed right-0 left-0 bottom-0 top-0 w-full h-full flex items-center justify-center p-10 md:p-[80px] lg:p-0 lg:flex-row scroll animate-fade-in">
            <div className="modal-container lg:h-[500px] lg:w-[1000px] md:w-full md:h-[330px] bg-white flex relative right-0 left-0 bottom-10 top-20 md:bottom-0 md:top-0 flex-col md:flex-row">
              <div className="column modal-img w-full h-auto z-70 md:w-1/2 md:h-[330px] lg:h-[500px] relative">
                <img
                  className="h-auto md:h-[330px] lg:h-full w-full z-100"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                {selectedProduct.sale && (
                  <div className="absolute top-[10px] left-[10px] w-[40px] h-[40px] bg-red-500 text-white flex items-center justify-center rounded-full shadow-lg">
                    <span className="text-sm font-bold">sale!</span>
                  </div>
                )}
              </div>
              <div className="column info-column w-full h-full md:w-1/2 md:overflow-y-auto lg:h-[500px] lg:overflow-visible md:max-h-[330px]">
                <div className="row modal-content h-[full-80px] w-full p-[15px] pb-0 lg:px-[30px] lg:pt-[30px]">
                  <div className="row modal-content1 h-1/2 w-full border-b-2">
                    <div className="modal-name text-[27px] text-[#415161] font-black">
                      {selectedProduct.name}
                    </div>
                    <div className="modal-price flex text-2xl font-semibold mb-2">
                      {selectedProduct.sale ? (
                        <>
                          <div className="modal-original-price line-through text-[#c7c7c7] mr-2">
                            {selectedProduct.originalPrice}
                          </div>
                          <div className="modal-sale-price text-[#67727d]">
                            {selectedProduct.salePrice}
                          </div>
                        </>
                      ) : (
                        <div className="modal-sale-price text-[#67727d]">
                          {selectedProduct.originalPrice}
                        </div>
                      )}
                    </div>
                    <div className="modal-body text-base flex justify-start text-[#67727d] mb-[17px]">
                      Neque porro quisquam est, qui dolore ipsum quia dolor sit
                      amet, consectetur adipisci velit, sed quia non incidunt
                      lores ta porro ame. numquam eius modi tempora incidunt
                      lores ta porro ame.
                    </div>
                  </div>

                  <div className="row modal-content2 h-1/2 w-full">
                    <div className="modal-category mb-[15px] pt-[10px] text-base">
                      <span className="posted_in text-[#67727d]">
                        Category:
                        <a
                          className="text-pink-700"
                          href={`/${selectedProduct.category.toLowerCase()}`}
                        >
                          {" "}
                          {selectedProduct.category}
                        </a>
                      </span>
                    </div>
                    <div className="modal-fs text-lg text-[#67727d] my-[10px] font-bold">
                      Free shipping on orders over $50!
                    </div>

                    {[
                      "No-Risk Money Back Guarantee!",
                      "No Hassle Refunds",
                      "Secure Payments",
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="modal-check flex justify-start items-center text-[#67727d] "
                      >
                        <svg
                          className="h-[15px] w[15px] pr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentcolor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                        <div className="modal-sub pl-[10px]">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="row my-5">
                  <div className="modal-cart flex items-center justify-start ">
                    <div className="flex items-center justify-start ml-[8px] lg:my-5 lg:pl-[30px]">
                      <button
                        onClick={decreaseQuantity}
                        className="w-10 h-10 flex items-center justify-center bg-white text-[#67727d] text-xl font-bold border-2"
                      >
                        -
                      </button>
                      <span
                        id="counter"
                        className="w-16 h-10 flex items-center justify-center bg-white text-[#67727d] text-lg font-semibold border-2"
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={increaseQuantity}
                        className="w-10 h-10 flex items-center justify-center bg-white text-[#67727d] text-xl font-bold border-2"
                      >
                        +
                      </button>
                    </div>
                    <a
                      href=""
                      className="action-modal md:text-xs uppercase p-2.5 w-[174px] h-[40px] flex items-center justify-center mx-2 space-x-2 border-2 text-gray-800 "
                    >
                      <svg
                        className="right-icon h-4 w-4 mr-3 text-[#67727d]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                      </svg>
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="modal-close absolute top-[-18px] right-[-18px] bg-gray-200 rounded-full cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
