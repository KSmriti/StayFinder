import React from 'react';
import Register from './register';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Homepage from './homePage';
import Search from './search';

function App(){
    return(

    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<Homepage/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    );
}

export default App;