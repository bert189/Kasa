import React from "react";
import './css/style.css';
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;
