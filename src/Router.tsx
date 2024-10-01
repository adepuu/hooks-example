import {FC} from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import Drilling from "./pages/Drilling";
import Home from "./pages/Home";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path={"/drilling"} element={<Drilling />} />
      <Route path="/contact" element={(
        <div>
          <h1>Contact</h1>
          <p>Welcome to the contact page</p>
        </div>
      )}/>
    </Routes>
  );
}

export default Router;