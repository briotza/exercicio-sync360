import React from 'react';
import './App.css';

function EditProfile({ edit }) {
    return (
        <div className='col-md-12 mt-5 d-flex justify-content-center'>
            <div className='card form-profile'>
                <div className='card-header'>
                    <h3>Editar Perfil</h3>
                </div>
                <div className='card-body p-5'>
                    <div className='mb-3'>
                        <label className='form-label'>Nome:</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Idade:</label>
                        <input type='number' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Rua:</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Bairro:</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Estado:</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Biografia:</label>
                        <textarea className='form-control'/>
                    </div>
                    <button className='btn btn-primary me-2'>SALVAR</button>
                    <button className='btn btn-secondary'>CANCELAR</button>
                </div>

            </div>

        </div>
    )
}

export default EditProfile;