import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";

function App() {
  return (
    <div className="App-wrapper">
        <Header />
        <Navbar/>
        <div className='app-wrapper-content'>
            <Profile/>
            <Dialogs/>
        </div>
    </div>
  );
}

export default App;
