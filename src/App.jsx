import Home from "./pages/Home";

import Client from "./pages/client";
import About from "./pages/About";
import Service from "./pages/serevice";
import ContactUs from "./pages/contact";
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/term";
import Blogs from "./pages/blogs";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import "./index.css";
import HelpCenter from "./pages/help";
import SupportPage from "./pages/support";
import Suggestions from "./pages/suggestion";
import FAQs from "./pages/FAQs";
import OurValues from "./pages/values";
import OurTeam from "./pages/team";
import ErrorPage from "./pages/error";
import ChatBotButton from "./components/ChatBotButton"

import { GetQuoteButton } from "./components";

function App() {
  return (
    <>
      <Main>
        {" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/clients" element={<Client />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route
            exact
            path="/terms-and-condition"
            element={<TermsAndConditions />}
          />
          <Route exact path="/helps-center" element={<HelpCenter />} />
          <Route exact path="/supports" element={<SupportPage />} />
          <Route exact path="/explore" element={<Service />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/suggestions/" element={<Suggestions />} />
          <Route exact path="/FAQs/" element={<FAQs />} />
          <Route exact path="/values" element={<OurValues />} />
          <Route exact path="/team" element={<OurTeam />} />
            {/* Fallback route for undefined paths */}
            <Route path="*" element={<ErrorPage />} />
      </Routes>
      <GetQuoteButton />
      <ChatBotButton /> 
      
      </Main>
    </>
  );
}

export default App;
