import "./App.css";
import Cart from "./components/Cart";
// import ColorChangingText from "./components/ColorChangingText";
// import ReactContext from "./components/ReactContext";
// import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/Cart/SingleProduct";

function App() {
  return (
    <div className="App">
      {/* <ColorChangingText/> */}
      {/* <Sidebar/> */}
      {/* <ReactContext/> */}
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
