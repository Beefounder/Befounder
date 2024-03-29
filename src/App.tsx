import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
// import { Homepage } from "./pages/Homepage";
// import { FAQs } from "./pages/FAQs";
// import Header from "./components/layout/Header/Header";
// import { Footer } from "./components/layout/Footer";
import Layout from "./Layout";
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* <Route path="/FAQs" element={<FAQs />} /> */}
      </Route>
    </Routes>
  );
}

// function Layout() {
//   return (
//     <>
//       <Header />
//       <Homepage />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }
