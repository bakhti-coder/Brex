import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
