import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
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
    <div className="row">
      {/*Menu Lateral de Navegação*/}
      <div className="col-md-2 bg-primary">
        <p>navegação</p>
      </div>

      {/*Perfil*/}
      <div className="col-md-8">
        <Profile profile={profileData} />
      </div>

      {/*Página Acessada*/}
      <div className="col-md-2 bg-info">

      </div>
    </div>
   </div>
  );
}

export default App;
