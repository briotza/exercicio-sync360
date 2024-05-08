import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile'

function App() {
  return (
   <div className="container-fluid">
    <div className="row">
      {/*Menu Lateral de Navegação*/}
      <div className="col-md-2 bg-primary">
        <p>navegação</p>
      </div>

      {/*Perfil*/}
      <div className="col-md-8">
        <p>Perfil</p>
      </div>

      {/*Página Acessada*/}
      <div className="col-md-2 bg-info">

      </div>
    </div>
   </div>
  );
}

export default App;
