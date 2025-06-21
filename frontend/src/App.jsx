import React from 'react';
import Register from './register';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Homepage from './homePage';
import Search from './search';
import PropertyDetail from './propertyDetail';


function App(){
    return(

    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<Homepage/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
    );
}

export default App;