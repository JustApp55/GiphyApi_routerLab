import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Trending from './Pages/Trending.jsx'
import About from './Pages/About.jsx'
import Profile from './Pages/Profile.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'


function App() {
  return (
    <Router className="App">
      <nav className="txt">
      <Link to="/" > Home </Link> 
        <Link to="" >  </Link>
        <Link to="/trending" > Trending </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trending" element={<Trending />} />
        <Route path="" /> 
        <Route path="" />
      </Routes>
    </Router>
  );
}

export default App;
