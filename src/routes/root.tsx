import { Route, Routes } from "react-router-dom";
import { FAQs } from "../pages/FAQs";
import { Homepage } from "../pages/Homepage";
import Layout from "../Layout";

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Route>
    </Routes>
  );
};

export default Root;
