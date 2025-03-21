import { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogo } from "../assets";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="container-header w-full h-[100px] flex relative items-center justify-between font-barlow px-4 lg:px-8 ">
      {/* Cột Logo */}
      <div className="column logo-column w-[470px]">
        <div className="img-custom-logo w-[200px] p-5 ">
          <img
            src={siteLogo}
            alt="Site Logo"
          />
        </div>
      </div>

      {/* Cột Header Selection */}
      <div className="column menu-column hidden lg:!block">
        <div className="header-selection">
          <ul className="header-list flex text-center">
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/"
                className="link w-full h-full flex items-center justify-center"
              >
                Home
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/allproducts"
                className="link w-full h-full flex items-center justify-center"
              >
                All Products
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/tshirts"
                className="link w-full h-full flex items-center justify-center"
              >
                T Shirts
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/mugs"
                className="link w-full h-full flex items-center justify-center"
              >
                Mugs
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/abouthdx"
                className="link w-full h-full flex items-center justify-center"
              >
                About HDX
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to="/contact"
                className="link w-full h-full flex items-center justify-center"
              >
                Contact
              </Link>
            </li>
            <li className="w-full h-[100px] flex items-center justify-center whitespace-nowrap">
              <Link
                to=""
                className="link w-full h-full flex items-center justify-center"
              >
                Account
                <svg
                  className="w-3 h-3 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
              <ul className="sub-header-item absolute bg-gray-50 inline-flex flex-col w-44 top-[99px] h-[90px] opacity-0 z-[1] invisible left-0">
                <li className="h-[45px] flex items-center">
                  <Link to="/login" className="sub-header-link">
                    My Account
                  </Link>
                </li>
                <li className="h-[45px] flex items-center">
                  <Link to="/cart" className="sub-header-link">
                    Cart
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Cột giá tiền và giỏ hàng */}
      <div>
        <label
          htmlFor="menu"
          className="column price-column relative items-center cursor-pointer hidden lg:!flex  "
        >
          <p className="price-bought">£0.00</p>
          <svg
            className=" cart-icon h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            {" "}
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </label>
      </div>
      <input type="checkbox" name="menu" className="menu" id="menu" hidden />
      <label
        htmlFor="menu"
        className="overlay fixed opacity-0 invisible cursor-pointer"
      ></label>
      <div className="menu-drawer flex fixed flex-col justify-between ">
        <div className="shopping-row flex justify-between items-center ">
          <h2 className="member">Shopping Cart</h2>
          <label htmlFor="menu" className="close-btn cursor-pointer p-2.5">
            <i className="fa-solid fa-x"></i>
          </label>
        </div>
        <p className="trangThai text-center">No products int the cart.</p>
        <Link
          to="/allproducts"
          className="action inline-block text-center py-2.5 self-center mb-5"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Menu icon - Chỉ hiện trên mobile & tablet */}
      <div
        className="column menu-column lg:hidden cursor-pointer bg-pink-600 flex justify-center items-center w-10 h-10 rounded absolute top-[30px] right-4 z-50"
        onClick={() => setMenuOpen(true)}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      {/* Overlay che màn hình khi menu mở */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[90]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-[100]`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <Link to="/" className="block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/allproducts" className="block">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/tshirts" className="block">
              T Shirts
            </Link>
          </li>
          <li>
            <Link to="/mugs" className="block">
              Mugs
            </Link>
          </li>
          <li>
            <Link to="/abouthdx" className="block">
              About HDX
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block">
              Contact
            </Link>
          </li>
          <li>
            <button
              className="w-full text-left flex items-center justify-between"
              onClick={() => setAccountOpen(!accountOpen)}
            >
              Account
              <svg
                className={`w-3 h-3 transition-transform ${
                  accountOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            {accountOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link to="/login" className="block">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="block">
                    Cart
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/cart" className="flex justify-start items-center">
              <p className="price-bought">£0.00</p>
              <svg
                className=" cart-icon h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                {" "}
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
