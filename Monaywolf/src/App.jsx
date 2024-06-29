import Home from "./pages/Home";
import Client from "./pages/client";
import About from "./pages/About";
import Service from "./pages/serevice";
import ContactUs from "./pages/contact";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import './index.css';

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/clients" element={<Client/>} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/term-condition" element={<About />} />
          <Route exact path="/blogs" element={<About />} />
          <Route exact path="/Community" element={<About />} />
         
         
         
        </Routes>
      </Main>
    </>
  );
}

export default App;