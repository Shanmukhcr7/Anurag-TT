import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fib from "./components/Fib";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fib" element={<Fib />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
