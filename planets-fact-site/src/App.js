import './App.css';
import Navbar from './components/header/Navbar';
import data from './data.json';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetPage from './pages/PlanetPage'
function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar data={data} />
          <Routes>
            <Route path='/' element={<PlanetPage data={data[0]} />} />
            {data?.map((element, index) => {
              return (<Route key={index} path={`${element?.name}`} element={<PlanetPage data={element} />} />)
            })}
          </Routes>

      </Router>

    </div>
  );
}

export default App;
