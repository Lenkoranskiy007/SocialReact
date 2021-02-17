import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";


function App(props) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <DialogsContainer
                />}/>
                <Route path='/profile' render={() => <Profile

                />}/>
            </div>
        </div>

    );
}

export default App;
