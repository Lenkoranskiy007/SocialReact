import './App.css';
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Profile} from "./Profile";

function App() {
  return (
    <div className="App-wrapper">
        <Header />
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
