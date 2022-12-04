import "./App.css";
import VoterRegistration from "./components/VoterRegistration";
import CandidateRegistration from "./components/CandidateRegistration.js";
import VoterDisplay from "./components/VoterDisplay";
import { Route, Routes } from "react-router-dom";
import { Connection } from "./components/Connection";
import FileUpload from "./components/FileUpload";
import CheckVoter from "./components/checkVoter";
import CheckCandidate from "./components/checkCandidate";
import VoterLogin from "./components/VoterLogin";
import Voting from "./components/Voting";
import ElectionCreation from "./components/ElectionCreation";
import VoteCounted from "./components/VoteCounted";
import NoVoting from "./components/NoVoting";
import ElectionList from "./components/ElectionList";
import Result from "./components/Result";
import DashBoard2 from "./components/Dashboard2";

function App() {
  return (
    <>
      <Connection />
      <Routes>
        <Route path="/voterRegister" element={<VoterRegistration />} />

        <Route path="/checkVoter" element={<CheckVoter />} />

        <Route path="/checkCandidate" element={<CheckCandidate />} />

        <Route path="/" element={<VoterLogin />} />

        <Route path="/candidateRegister" element={<CandidateRegistration />} />

        <Route path="/fileUpload" element={<FileUpload />} />

        <Route path="/voterDisplay" element={<VoterDisplay />} />

        <Route path="/voting" element={<Voting />} />

        <Route path="/createElection" element={<ElectionCreation />} />

        <Route path="/votingDisplay" element={<VoterDisplay />} />

        <Route path="/voteCounted" element={<VoteCounted />} />

        <Route path="/noVoting" element={<NoVoting />} />

        <Route path="/list" element={<ElectionList />} />

        <Route path="/admin" element={<DashBoard2 />} />

        <Route path="/result/:electionDistrict" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
