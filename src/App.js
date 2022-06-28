import './App.css';
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Profile from "../components/Profile/Profile";
import 'boxicons';
import Dialogs from "../components/Dialogs/Dialogs";
import Newsfeed from "../components/Newsfeed/Newsfeed";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Stories from "../components/Stories/Stories";
import Groups from "../components/Groups/Groups";
import Streams from "../components/Streams/Streams";
import Games from "../components/Games/Games";
import Settings from "../components/Settings/Settings";



const App = (props) => {


    return (
      <BrowserRouter>
          <div className='app-wrapper'>
          <Header/>
          <Nav/>
          <div className='maingrid'>
              <Routes>
                  <Route path="" element={<Newsfeed/>}/>
                  <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogs} />}/>
                  <Route path="/profile/*" element={<Profile profile={props.state.profile} />}/>
                  <Route path="/newsfeed/*" element={<Newsfeed addPost={props.addPost}/>}/>
                  <Route path="/stories/*" element={<Stories/>}/>
                  <Route path="/groups/*" element={<Groups/>}/>
                  <Route path="/streams/*" element={<Streams/>}/>
                  <Route path="/games/*" element={<Games/>}/>
                  <Route path="/settings/*" element={<Settings/>}/>
              </Routes>

          </div>
          </div>
      </BrowserRouter>);}

export default App;
