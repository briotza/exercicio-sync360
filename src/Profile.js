import React from 'react';

function Profile({ profile }) {
    return (
        <div>
            <div className='col-md-4 bg-secondary mt-3'>
                <span>Coluna 1</span>
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