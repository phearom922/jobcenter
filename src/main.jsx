import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tw-elements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ============Component ===========
import App from "./App.jsx";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import PostJob from "./pages/PostJob";
import Searchable from "./pages/Searchable";
import JobDetails from "./pages/JobDetails";
import JobDetail from "./components/JobDetail.jsx";
import PageForm from "./pages/PageForm.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About_Us />} />
          <Route path="contact-us" element={<Contact_Us />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="searchable" element={<Searchable />} />
          <Route path="job-details" element={<JobDetails />}>
            <Route path=":id" element={<JobDetail />} />
          </Route>
          <Route path="page-form" element={<PageForm />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
