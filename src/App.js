import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile';
import NavBar from './NavBar';
import EditProfile from './EditProfile';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    nome: 'Ciano',
    idade: '22',
    bio: 'Ciano, 22 anos, é um estudante de cinema apaixonado pela arte de contar histórias através das lentes da câmera. Desde tenra idade, sua imaginação foi cativada pelas telas do cinema, e agora ele dedica seus dias na faculdade de cinema, transformando sua paixão em profissão. Com olhos atentos e mente criativa, ele está determinado a deixar sua marca na indústria cinematográfica, um quadro por vez.',
    rua: 'Lorem ipsum dolor sit amet',
    bairro: 'Dorem ipsum dolor sit a',
    estado: 'SP'
  });

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode); 
  };

  const editProfile = (data) => {
    setUser(data);
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
        <Profile profile={user} toggleEditMode={toggleEditMode}/>
        {editMode && <EditProfile edit={editProfile} cancelEdit={() => setEditMode(false)} />}

      </div>

      {/*Página Acessada*/}
      <div className="col-md-2 side-container">

      </div>
    </div>
   </div>
  );
}

export default App;
