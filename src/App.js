import React from "react";
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Contact } from './components/Pages/Contact';
import { Navbar } from './components/layout/Navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {NotFound} from "./components/Pages/NotFound";
import { AddUsers } from "./components/Pages/users/AddUsers";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route path="users/add" element={<AddUsers/>}/>
        <Route component={<NotFound/>}/>
        </Routes>
    </div>
    </Router>
  );

}

export default App;
