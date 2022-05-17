import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import PagesListBooks from 'page/List/ListBooks';
import Newbooks from 'page/Newbooks/newbooks';
import Editbook from 'page/editbook/editbook'


  const Root =() =>{
      return(
          <Router>
              <Routes>                      
                <Route path="/" element={<PagesListBooks />} />
                <Route path="/create" element={<Newbooks />} />
                <Route path="/edit/:id" element={<Editbook/>} />
              </Routes>
          </Router>
      )
  }
  export default Root;