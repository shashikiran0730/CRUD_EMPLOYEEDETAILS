import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Welcome } from "./Welcome/Welcome";
import { Welcome2 } from "./Welcome2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/welcome2" element={<Welcome2></Welcome2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
