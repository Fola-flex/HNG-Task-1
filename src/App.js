import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
