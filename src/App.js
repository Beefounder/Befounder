import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageContainer } from "./pages/Homepage/HomePageContainer";

function App() {
  return (
    <BrowserRouter>
      <HomepageContainer />
    </BrowserRouter>
  );
}

export default App;
