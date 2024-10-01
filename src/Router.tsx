import {FC} from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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