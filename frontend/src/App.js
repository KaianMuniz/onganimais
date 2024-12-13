import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Silvestre from "./Pages/Silvestre"
import List from "./Pages/List"
import Donate from "./Pages/Donate"


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silvestre" element={<Silvestre />} />
        <Route path="/list" element={<List />} />
        <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
