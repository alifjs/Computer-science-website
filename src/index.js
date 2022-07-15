import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import App3 from './App3';
import Blog from './blog.js'
import Navbar from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<App3/>}/>
        <Route path="blog" element={<Blog/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

