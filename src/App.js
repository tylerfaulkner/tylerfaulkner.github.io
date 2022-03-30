import './css/App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Main from "./Main";
import CardDisplay from "./CardDisplay";
import About from "./About";

function App() {
  return (
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<CardDisplay type={"projects"}/>}/>
        <Route path="/posts" element={<CardDisplay type={"posts"}/>}/>
        <Route path="/" element={<Main/>} />
      </Routes>
  );
}

export default App;
