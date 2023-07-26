import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './containers'
import "@fontsource/roboto-mono";

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
