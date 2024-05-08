import React from 'react';
import profileImage from './img/profile.jpg';
import './App.css';

function Profile({ profile }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className='col-md-4 bg-warning mt-3 text-center top-profile'>
                <img src={profileImage} alt='user-image' className='top-profile-img'/>
            </div>
            <div className='col-md-6 bg-success mt-3'>
                <div className='card-body text-center'>
                    <h2>Nome Usuário</h2>
                    <p className='lead'>30 anos</p>
                    <p>biografiabiografiabiografia</p>
                </div>
            </div>
            <div className='col-md-2 bg-warning mt-3'>
                <span>Coluna 1</span>
            </div>
        </div>
    )
}

export default Profile;
