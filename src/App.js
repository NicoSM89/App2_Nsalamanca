import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import UserDetail from "./Pages/UserDetail/UserDetail";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
          <Route path='/detail/:id' element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
