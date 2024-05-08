import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile';
import NavBar from './NavBar';
import React, { useState } from 'react';

function App() {
  const [user] = useState({});
  const profileData = {
    name: "Nome",
    age: 1,
    email: "email@email.com"
  };
  
  return (
   <div className="container-fluid">
    <div className="row full-height">
      {/*Menu Lateral de Navegação*/}
      <div className="col-md-2 side-container">
        <NavBar />
      </div>

      {/*Perfil*/}
      <div className="col-md-8 profile-container">
        <Profile profile={profileData} />
      </div>

      {/*Página Acessada*/}
      <div className="col-md-2 side-container">

      </div>
    </div>
   </div>
  );
}

export default App;
