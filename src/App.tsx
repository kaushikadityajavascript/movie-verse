import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
// import "./App.css";

const App: React.FC = () => {
  return (
     <div>
      <Header />
      {/* <Body /> */}
      {/* Tailwind test */}
      {/* <div className="bg-red-500 text-white">Tailwind is working!</div> */}
      <Outlet />
      <Footer/>
    </div>
  );
} 

export default App;
