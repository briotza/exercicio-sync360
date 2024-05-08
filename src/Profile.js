import React from 'react';

function Profile({ profile }) {
    return (
        <div>
            <div className='col-md-4 bg-secondary mb-3'>
                <span>Coluna 1</span>
            </div>
            <div className='col-md-6 bg-success mb-3'>
                <span>Coluna 1</span>
            </div>
            <div className='col-md-2 bg-warning mb-3'>
                <span>Coluna 1</span>
            </div>
        </div>
    )
}

export default Profile;