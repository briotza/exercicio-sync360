import React from 'react';
import profileImage from './img/profile.jpg';

function Profile({ profile }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className='col-md-4 bg-secondary mt-3 text-center'>
                <img src={profileImage} alt='user-image' style={{borderRadius: '100%', width: '60%'}}/>
            </div>
            <div className='col-md-6 bg-success mt-3'>
                <span>Coluna 1</span>
            </div>
            <div className='col-md-2 bg-warning mt-3'>
                <span>Coluna 1</span>
            </div>
        </div>
    )
}

export default Profile;