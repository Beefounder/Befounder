import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageContainer } from "./pages/Homepage/HomePageContainer";
import { FAQsContainer } from "./pages/FAQs/FAQsContainer";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HomepageContainer />
      <Routes>
        <Route path="/FAQs" element={<FAQsContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
