import "./App.css";
import VoterRegistration from './components/VoterRegistration';
import VoterDisplay from './components/VoterDisplay';
import CandidateRegistration from './components/CandidateRegistration';
import {Route,Routes} from 'react-router-dom';
import {Connection} from './components/Connection';
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
    <Connection />
      <Routes>
        <Route path="/voterRegister" element={<VoterRegistration/>} />
        <Route path="/candidateRegister" element={<CandidateRegistration/>} />
        <Route path="/fileUpload" element={<FileUpload/>} />
        <Route path="/voterDisplay" element={<VoterDisplay/>} />
        {/* <Route path="/comp2" element={<Comp2/>} /> */}
      </Routes>
    </>
  );
}

export default App;
