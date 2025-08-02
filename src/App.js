import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Section from './Routes/Section';
import Information from "./Routes/Information";

function App() {
  return (
      <Router>
          <Header />
            <main>
                <Routes>
                    <Route path="/" element={ <Section /> } />
                    <Route path="/information" element={ <Information />} />
                </Routes>
            </main>
      </Router>
  );
}

export default App;
