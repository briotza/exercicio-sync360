import React from 'react';
import profileImage from './img/profile.jpg';
import './App.css';

function Profile({ profile, toggleEditMode }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className='col-md-4 text-center top-profile'>
                <img src={profileImage} alt='user-image' className='top-profile-img' />
            </div>
            <div className='col-md-6 user-info'>
                <div className='card-body text-center'>
                    <h2>{profile.nome}</h2>
                    <p className='lead'>{profile.idade} anos</p>
                    <p className='bio'>{profile.bio}</p>
                </div>
            </div>
            <div className='row mt-5 endereco'>
                <div className='col-md-4'>
                    <h5>Rua</h5>
                    <p>{profile.rua}</p>
                </div>
                <div className='col-md-4'>
                    <h5>Bairro</h5>
                    <p>{profile.bairro}</p>
                </div>
                <div className='col-md-4'>
                    <h5>Estado</h5>
                    <p>{profile.estado}</p>
                </div>
            </div>
            <div className='card-footer mt-5'>
                <button className='btn btn-primary mb-4' onClick={toggleEditMode}>EDITAR</button>

            </div>
        </div>
    )
}

export default Profile;
