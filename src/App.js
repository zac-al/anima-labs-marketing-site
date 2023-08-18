import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './containers'
import "@fontsource/roboto-mono";
import "@fontsource/inter"; 
import "./fonts/Fontspring-DEMO-rocgrotesk-light.otf"
import "./fonts/SF-Pro.ttf"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes> 
    </div>
  );
}

export default App;
