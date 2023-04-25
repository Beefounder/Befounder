import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageContainer } from "./pages/Homepage/HomePageContainer";

function App() {
  return (
    <BrowserRouter>
      <HomepageContainer />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
