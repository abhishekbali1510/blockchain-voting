import "./App.css";
import {Connection} from "./components/Connection";
import Reterive from "./components/reterive";
import Store from "./components/store";

function App() {
  return (
    <>
    <h1>hello App</h1>
    <Connection />
    
    <Store />
    <Reterive />
    </>
  );
}

export default App;
