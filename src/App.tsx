import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { HomepageContainer } from "./pages/Homepage/HomePageContainer";
import { FAQsContainer } from "./pages/FAQs/FAQsContainer";
import Header from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/FAQs" element={<FAQsContainer />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <HomepageContainer />
      <Outlet />
      <Footer />
    </>
  );
}
