import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import './App.css';
import Home from "./Pages/Home";




import { CartProvider } from "./Context/CartContext";
import WhatsAppFloat from "./Components/WhatsAppFloat";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainers />
        <WhatsAppFloat />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound404 />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
