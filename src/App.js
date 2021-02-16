import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Dialogs/DialogsContainer";


function App(props) {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <DialogsContainer
                  dialogsPage={props.state.dialogsPage}
                  dispatch={props.dispatch}

                />}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}

                />}/>
            </div>
        </div>

    );
}

export default App;
