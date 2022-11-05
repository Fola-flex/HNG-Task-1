import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/HNG-Task-1' element={<Home />}></Route>
        <Route path="/HNG-Task-1/contact" element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
