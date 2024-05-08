import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile';
import NavBar from './NavBar';
import EditProfile from './EditProfile'
import React, { useState } from 'react';

function App() {
  const [user] = useState({});
  const [editMode, setEditMode] = useState(false);
  const profileData = {
    name: "Nome",
    age: 1,
    email: "email@email.com"
  };

  const toggleEditMode = () => {
    setEditMode(!editMode); 
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
        <Profile profile={profileData} toggleEditMode={toggleEditMode}/>
        {editMode && <EditProfile />}

      </div>

      {/*Página Acessada*/}
      <div className="col-md-2 side-container">

      </div>
    </div>
   </div>
  );
}

export default App;
