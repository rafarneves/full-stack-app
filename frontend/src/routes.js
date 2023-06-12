import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Archiveds from "./pages/Archived";

const RoutesTask = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/archiveds" element={<Archiveds />} />
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesTask;