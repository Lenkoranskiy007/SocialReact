import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogs={props.state.dialogsPage.dialogs}
                    messages={props.state.dialogsPage.messages}/>}/>
                <Route path='/profile' render={() => <Profile
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}
                    posts={props.state.profilePage.posts}/>}/>
            </div>
        </div>

    );
}

export default App;
