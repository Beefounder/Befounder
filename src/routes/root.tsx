import { Outlet, Route, Routes } from "react-router-dom";
import { FAQs } from "../pages/FAQs";
import { Header } from "../components/layout/Header";
import { Homepage } from "../pages/Homepage";
import { Footer } from "../components/layout/Footer";

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/FAQs" element={<FAQs />} />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <>
      <Header />
      <Homepage />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
