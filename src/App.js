import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
