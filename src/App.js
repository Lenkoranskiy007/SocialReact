import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



function App( props) {
  return (
      <BrowserRouter>
          <div className="App-wrapper">
              <Header />
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' render={() => <Dialogs
                      dialogs={props.state.dialogsPage.dialogs}
                      messages={props.state.dialogsPage.messages}/>}/>
                      <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
