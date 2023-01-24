import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MostViewed from "./Pages/MostViewed";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/most-viewed" element={<MostViewed/>}/>
    </Routes>
  );
}

export default AppRoutes;