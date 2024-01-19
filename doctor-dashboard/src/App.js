import './App.css';
import SideMenu from './Prototypes/SideMenu';
import CreatePost from './Components/CreatePost/CreatePost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/LandingPage/Signup/Signup';
import Signin from './Components/LandingPage/Signin/Signin';
import DocProfile from './Components/DocProfile/DocProfile';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import CrtTreatment from './Components/CrtTreatment/CrtTreatment';
// import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      {/* <Signup /> */}
      {/* <Signin/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/sidemenu' element={<SideMenu />}>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='/sidemenu/mytitle' element={<CreatePost />}></Route>
            <Route path='/sidemenu/docprofile' element={<DocProfile />}></Route>
            <Route path='/sidemenu/update-profile' element={<UpdateProfile />}></Route>
            <Route path='/sidemenu/crt-treat' element={<CrtTreatment />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;