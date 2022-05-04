import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import PagesListBooks from 'page/List/ListBooks';


  const Root =() =>{
      return(
          <Router>
              <Routes>                      
                <Route path="/" element={<PagesListBooks />} />
                <Route path="/create" element={<PagesListBooks />} />
                <Route path="/edit/:id" element={<PagesListBooks />} />
              </Routes>
          </Router>
      )
  }
  export default Root;