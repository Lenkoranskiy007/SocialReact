import './App.css';
import {Navbar} from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./USers/UsersContainer";
import ProfilesContainer from "./Profile/ProfilesContainer";
import HeadersContainer from "./Header/HeaderContainer";


function App(props) {
    return (
        <div className="App-wrapper">
            <HeadersContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <DialogsContainer
                />}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfilesContainer
                />}/>

                <Route path='/users' render={() => <UsersContainer
                />}/>

            </div>
        </div>

    );
}

export default App;
