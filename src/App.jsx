import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Lamborghini from "./Pages/Lamborghini";
import Audi from "./Pages/Audi";
import BMW from "./Pages/BMW";
import Mercedes from "./Pages/Mercedesbenz"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lamborghini" element={<Lamborghini />} />
      <Route path="/audi" element={<Audi />} />
      <Route path="/bmw" element={<BMW />} />
      <Route path="/mercedes" element={<Mercedes />} />


    </Routes>
  );
}
