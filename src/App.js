import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Section from './Routes/Section';
import Information from "./Routes/Information";
import LogIn from "./Routes/LogIn";
import Join from "./Routes/Join";

function App() {
  return (
      <Router>
          <Header />
            <main>
                <Routes>
                    <Route path="/" element={ <Section /> } />
                    <Route path="/information" element={ <Information /> } />
                    <Route path="/login" element={ <LogIn /> } />
                    <Route path="/join" element={ <Join /> } />
                </Routes>
            </main>
      </Router>
  );
}

export default App;
