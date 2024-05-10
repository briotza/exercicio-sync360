import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile';
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
  const [showMenu, setShowMenu] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const updateProfileData = (data) => {
    setUser(data);
  };

  return (
    <div className="container-fluid">
      <div className="row full-height">
        <nav className="navbar navbar-light nav-bar">
          <span className="navbar-brand mb-0 h1">Sync360</span>
          <button className="navbar-toggler d-md-none nav-btn" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        {showMenu && (
          <div className='col-md-12 text-center side-container'>
            <p>Menu</p>
            <p>Perfil</p>
            <p>Configurações</p>
            <p>Sair</p>
          </div>
        )}
        {/*Menu Lateral de Navegação*/}
        <div className="col-md-2 side-container d-none d-md-block">
          <p>Menu</p>
          <p>Perfil</p>
          <p>Configurações</p>
          <p>Sair</p>
        </div>

        {/*Perfil*/}
        <div className="col-md-10 profile-container">
          <Profile profile={user} toggleEditMode={toggleEditMode} />
          {editMode && (
            <EditProfile cancelEdit={() => setEditMode(false)} updateProfileData={updateProfileData} />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
