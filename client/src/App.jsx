import "./App.css";
import VoterRegistration from './components/VoterRegistration';
import CandidateRegistration from './components/CandidateRegistration';
import {Route,Routes} from 'react-router-dom';
import {Connection} from './components/Connection';

function App() {
  return (
    <>
    <Connection />
      <Routes>
        <Route path="/voterRegister" element={<VoterRegistration/>} />
        <Route path="/candidateRegister" element={<CandidateRegistration/>} />
        {/* <Route path="/comp2" element={<Comp2/>} /> */}
      </Routes>
    </>
  );
}

export default App;
