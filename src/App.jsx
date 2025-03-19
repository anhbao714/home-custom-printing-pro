import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Allproducts from "./pages/AllProducts/Allproducts";
import Tshirts from "./pages/Tshirts/Tshirts";
import Mugs from "./pages/Mugs/Mugs";
import AboutHDX from "./pages/AboutHDX/AboutHDX";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Account/MyAccount/Login/Login";
import LostPassword from "./pages/Account/MyAccount/Lostpassword/Lostpassword";
import Cart from "./pages/Account/Cart/Cart";
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
