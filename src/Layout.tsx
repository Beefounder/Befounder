import { Outlet } from "react-router-dom";
import { Footer } from "../src/components/layout/Footer";
import { Header } from "../src/components/layout/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
