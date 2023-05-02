
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./components/Footer";


const App = () => {
  return (
   <>
    <div className="bg-slate-900 ">
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
   </>
  )
};

export default App;
