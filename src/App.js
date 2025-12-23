import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Section from './Routes/Section';
import Information from "./Routes/Information";
import LogIn from "./Routes/LogIn";
import Join from "./Routes/Join";
import Function from "./Routes/Function";
import ClientIp from "./function/ClientIp";
import DrugInfo from "./Routes/DrugInfo";

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
                    <Route path="/function" element={ <Function /> } />
                    <Route path="/function/clientIp" element={ <ClientIp /> } />
                    <Route path="/drugInfo" element={ <DrugInfo />} />
                </Routes>
            </main>
      </Router>
  );
}

export default App;
