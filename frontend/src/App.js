import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/home";
import GenerateQr from "./pages/GenerateQr";
import ScanQr from "./pages/ScanQr";
import Product from "./pages/Product";
import Register from "./components/User/Register";
import Login from "./components/User/Login";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/generateQr" element={<GenerateQr />} />
        <Route path="/scanQr" element={<ScanQr />} />
        {/* <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />}/> */}
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
