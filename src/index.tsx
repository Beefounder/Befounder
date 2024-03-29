import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import { ErrorPage } from "./pages/Errorpage";
import { FAQs } from "./pages/FAQs";
// import { Login } from "./components/modals/Login";
// import { Signup } from "./components/modals/Signup";
// import { ResetPassword } from "./components/modals/ResetPassword";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/FAQs",
    element: <FAQs />,
  },
  // {
  //   path: "/login",
  //   element: <Login open={undefined} onClose={undefined} />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup open={undefined} onClose={undefined} />,
  // },
  // {
  //   path: "/forgotpassword",
  //   element: <ResetPassword open={undefined} onClose={undefined} />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
