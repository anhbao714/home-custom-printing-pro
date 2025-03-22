import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
import { useState } from "react";
import { products } from "../../data/products";
const Allproducts = () => {
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
    <div>
      <Navigation></Navigation>

      <div className="body-container w-full h-full mt-[10px] lg:px-[150px] md:px-5 font-barlow ">
        <div className="primary w-full h-full md:my-[100px]">
          <div className="shop-header w-full h-[80px] md:h-10 flex justify-between items-center mb-[40px] flex-col md:flex-row">
            <div className="column-1 flex items-center h-[40px] w-full md:w-3/4">
              <button className="uppercase p-2.5 w-1/2 md:w-[100px] h-full flex items-center border-2 border-[gray] text-gray-500">
                <svg
                  className="h-4 w-4 mr-2 text-gray-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                </svg>
                Filter
              </button>
              <p className="text-lg w-1/2 flex justify-end md:justify-start text-gray-500 md:ml-[10px] pr-2.5">
                Showing 11 of 11 results
              </p>
            </div>

            <div className="column-2 flex items-center h-[40px] relative group mt-[10px] mr-auto md:mr-0 w-1/2 md:w-[250px] lg:w-[150px] md:mt-0">
              <button className="flex lg:w-full items-center justify-between text-gray-500 text-lg p-2 w-[250px] border border-gray-300 ">
                Default sorting
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
              <ul className="absolute left-[-1px] top-[37px] bg-white shadow-lg border w-[250px] z-[3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Default sorting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Sort by popularity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Sort by average rating
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Sort by latest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Sort by price: low to high
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Sort by price: high to low
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="allproducts">
            <ul className="allproducts-columns w-full md:flex-wrap md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="column product1-column w-full h-full px-2"
                >
                  <div className="row img-product relative group">
                    <img
                      className="shirt__img w-full h-full cursor-pointer"
                      src={product.image}
                      alt={product.name}
                    />
                    <div
                      onClick={() => {
                        setIsOpen(true);
                        setSelectedProduct(product);
                      }}
                      className="overview z-10 w-full h-[30px] absolute bg-gray-700 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center transition-opacity duration-300 bottom-0"
                    >
                      <button className="quickview text-white block text-center js-quick-view">
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
            </ul>
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
                        Neque porro quisquam est, qui dolore ipsum quia dolor
                        sit amet, consectetur adipisci velit, sed quia non
                        incidunt lores ta porro ame. numquam eius modi tempora
                        incidunt lores ta porro ame.
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

                      {/* Dùng map ở đây */}
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
      <Footer></Footer>
    </div>
  );
};
export default Allproducts;
