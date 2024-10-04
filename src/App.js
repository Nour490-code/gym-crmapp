import React from 'react';
import Home from "./pages/Home";
import Fac from "./pages/Fac";
import Prog from "./pages/Prog";
import Last from "./pages/Last";
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="">
      <Home />
      
      {/* Facilities Section */}
      <div id="Facilities">
        <Fac />
      </div>
      
      {/* Programs Section */}
      <div id="Programs">
        <Prog />
      </div>

      {/* About Section */}
      <div id="About">
        <Last />
      </div>

      {/* Other Sections */}
      <div>
        <Login />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
