import './App.css';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggedOut from './Pages/LoggedOut.jsx';

function App() {




  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoggedOut/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
    
  );
}

export default App;
