import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./USers/UsersContainer";
import ProfilesContainer from "./Profile/ProfilesContainer";


function App(props) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <DialogsContainer
                />}/>
                <Route path='/profile' render={() => <ProfilesContainer
                />}/>

                <Route path='/users' render={() => <UsersContainer
                />}/>

            </div>
        </div>

    );
}

export default App;
