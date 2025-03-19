import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import Allproducts from "./pages/AllProducts/allproducts";
import Tshirts from "./pages/Tshirts/tshirts";
import Mugs from "./pages/Mugs/mugs";
import AboutHDX from "./pages/AboutHDX/aboutHDX";
import Contact from "./pages/Contact/contact";
import Login from "./pages/Account/MyAccount/Login/login";
import LostPassword from "./pages/Account/MyAccount/Lostpassword/lostpassword";
import Cart from "./pages/Account/Cart/cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterURL } from "./enmus/enums.router";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/home-custom-printing-pro/">
        <Routes>
          <Route path={RouterURL.Home} element={<Home />} />
          <Route path={RouterURL.Contact} element={<Contact />} />
          <Route path={RouterURL.Mugs} element={<Mugs />} />
          <Route path={RouterURL.Tshirts} element={<Tshirts />} />
          <Route path={RouterURL.Allproducts} element={<Allproducts />} />
          <Route path={RouterURL.Login} element={<Login />} />
          <Route path={RouterURL.LostPassword} element={<LostPassword />} />
          <Route path={RouterURL.AboutHDX} element={<AboutHDX />} />
          <Route path={RouterURL.Cart} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App;
