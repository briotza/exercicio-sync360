import React, { useState, useEffect } from 'react';
import profileImage from './img/profile.jpg';
import disconnected from './img/sad.png';
import './App.css';
import axios from 'axios';

function Profile({ toggleEditMode }) {
    const [userData, setUserData] = useState({
        nome: '',
        idade: '',
        bio: '',
        rua: '',
        bairro: '',
        estado: ''
    });

    const [databaseError, setDatabaseError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8800/usuarios/1')
            .then(response => {
                console.log('Dados do usuário recebidos:', response.data);
                const userDataFromApi = response.data;
                setUserData(userDataFromApi);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
                setDatabaseError(true);
            });
    }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            {databaseError ? (
                <div>
                    <h3 style={{ marginTop: '20px', wordWrap: 'break-word', textAlign: 'center' }}>Sem conexão com o banco de dados!</h3>
                    <img src={disconnected} alt='disconnected' className='disconnected-img' />
                </div>
            ) : (
                <React.Fragment>
                    <div className='col-md-4 text-center top-profile'>
                        <img src={profileImage} alt='user-image' className='top-profile-img' />
                    </div>
                    <div className='col-md-6 user-info'>
                        <div className='card-body text-center'>
                            <h2>{userData.nome}</h2>
                            <p className='lead'>{userData.idade} anos</p>
                            <p className='bio'>{userData.bio}</p>
                        </div>
                    </div>
                    <div className='row mt-5 endereco'>
                        <div className='col-md-4'>
                            <h5>Rua</h5>
                            <p>{userData.rua}</p>
                        </div>
                        <div className='col-md-4'>
                            <h5>Bairro</h5>
                            <p>{userData.bairro}</p>
                        </div>
                        <div className='col-md-4'>
                            <h5>Estado</h5>
                            <p>{userData.estado}</p>
                        </div>
                    </div>
                    {!databaseError && (
                        <div className='card-footer mt-5'>
                            <button className='btn btn-primary mb-4' onClick={toggleEditMode}>EDITAR</button>
                        </div>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default Profile;
