import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Emrpesa from './pages/Empresa';
import Contato from './pages/Contato';


function App() {
 
  return (
    <Router>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/empresa" element={<Empresa/>}>
          </Route>
          <Route path="/contato" element={<Contato/>}>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;