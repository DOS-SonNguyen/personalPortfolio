import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
