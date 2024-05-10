import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Profile';
import EditProfile from './EditProfile';
import React, { useState } from 'react';


function App() {
  // Dados do usuário
  const [user, setUser] = useState({
    nome: 'Ciano',
    idade: '22',
    bio: 'Ciano, 22 anos, é um estudante de cinema apaixonado pela arte de contar histórias através das lentes da câmera. Desde tenra idade, sua imaginação foi cativada pelas telas do cinema, e agora ele dedica seus dias na faculdade de cinema, transformando sua paixão em profissão. Com olhos atentos e mente criativa, ele está determinado a deixar sua marca na indústria cinematográfica, um quadro por vez.',
    rua: 'Lorem ipsum dolor sit amet',
    bairro: 'Dorem ipsum dolor sit a',
    estado: 'SP'
  });

  // Modo de edição
  const [editMode, setEditMode] = useState(false);

  // Menu escondido
  const [showMenu, setShowMenu] = useState(false);

  // Função para alternar modo de edição
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Função para aparecer Menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Função para atualizar dados
  const updateProfileData = (data) => {
    setUser(data);
  };

  return (
    <div className="container-fluid page-container">
      <div className="row">
        {/*Navbar*/}
        <nav className="navbar navbar-light nav-bar">
          <span className="navbar-brand mb-0 h1">Sync360</span>
          <button className="navbar-toggler d-md-none nav-btn" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        {/*Menu escondido - Hamburguer*/}
        {showMenu && (
          <div className='col-md-12 text-center d-md-none hidden-side-container'>
            <p>Menu</p>
            <p>Perfil</p>
            <p>Configurações</p>
            <p>Sair</p>
          </div>
        )}
      </div>

      <div className='row full-height'>

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
