import "./App.css";
import VoterRegistration from "./components/VoterRegistration";
import CandidateRegistration from "./components/CandidateRegistration.js";
import VoterDisplay from "./components/VoterDisplay";
//import CandidateRegistration from "./components/CandidateRegistration";
import { Route, Routes } from "react-router-dom";
import { Connection } from "./components/Connection";
import FileUpload from "./components/FileUpload";
import CheckVoter from "./components/checkVoter";
import CheckCandidate from "./components/checkCandidate";
import VoterLogin from "./components/VoterLogin";

function App() {
  return (
    <>
      <Connection />
      <Routes>
        <Route path="/voterRegister" element={<VoterRegistration />} />

        <Route path="/checkVoter" element={<CheckVoter />} />

        <Route path="/checkCandidate" element={<CheckCandidate />} />

        <Route path="/login" element={<VoterLogin />} />

        <Route path="/candidateRegister" element={<CandidateRegistration />} />

        <Route path="/fileUpload" element={<FileUpload />} />

        <Route path="/voterDisplay" element={<VoterDisplay />} />

        <Route path="/" element={<VoterDisplay />} />
      </Routes>
    </>
  );
}

export default App;
