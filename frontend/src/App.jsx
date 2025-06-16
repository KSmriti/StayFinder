import React from 'react';
import Register from './register';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Homepage from './homePage';

function App(){
    return(

    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<Homepage/>} />
      </Routes>
    </Router>
    );
}

export default App;