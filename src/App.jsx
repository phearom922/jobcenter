import React from "react";
import MainNav from "./components/MainNav";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="flex flex-col h-screen">
      <MainNav />
      <Navbar />

      <div className="mb-auto">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
