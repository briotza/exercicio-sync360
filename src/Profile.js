import React from 'react';
import profileImage from './img/profile.jpg';
import './App.css';

function Profile({ profile }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className='col-md-4 text-center top-profile'>
                <img src={profileImage} alt='user-image' className='top-profile-img'/>
            </div>
            <div className='col-md-6 user-info'>
                <div className='card-body text-center'>
                    <h2>Nome Usuário</h2>
                    <p className='lead'>30 anos</p>
                    <p className='bio'>João, 22 anos, é um estudante de cinema apaixonado pela arte de contar histórias através das lentes da câmera. Desde tenra idade, sua imaginação foi cativada pelas telas do cinema, e agora ele dedica seus dias na faculdade de cinema, transformando sua paixão em profissão. Com olhos atentos e mente criativa, ele está determinado a deixar sua marca na indústria cinematográfica, um quadro por vez.</p>
                </div>
            </div>
            <div className='col-md-2 bg-warning mt-3'>
                <span>Coluna 1</span>
            </div>
        </div>
    )
}

export default Profile;
