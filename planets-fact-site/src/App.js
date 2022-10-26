import './App.css';
import React, { useState } from 'react';
import Navbar from './components/header/Navbar';
import Drawer from './components/drawer/Drawer';
import data from './data.json';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetPage from './pages/PlanetPage'
function App() {
  const [open, setOpen] = useState(false);
  const handleDrawer = (e) => {
    e.preventDefault();
    setOpen(!open)
  }
  return (
    <div className="App" >
      <Router>

        <Navbar data={data} handleDrawer={handleDrawer} />
        {open ? <Drawer data={data} setOpen={setOpen} open={open}/> : (<Routes>
          <Route path='/' element={<PlanetPage data={data[0]} />} />
          {data?.map((element, index) => {
            return (<Route key={index} path={`${element?.name}`} element={<PlanetPage data={element} />} />)
          })}
        </Routes>)}
      </Router>

    </div>
  );
}

export default App;
