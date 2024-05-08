import React from 'react';
import './App.css';

function EditProfile({ edit }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    return (
        <div className='col-md-12 mt-5 d-flex justify-content-center'>
            <div className='card form-profile'>
                <div className='card-header'>
                    <h3>Editar Perfil</h3>
                </div>
                <div className='card-body p-5'>
                    <div className='mb-3'>
                        <label className='form-label'>Nome:</label>
                        <input type='text' className='form-control' id='name' name='name' value={FormData.name} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Idade:</label>
                        <input type='number' className='form-control' id='age' name='age' value={FormData.age} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Rua:</label>
                        <input type='text' className='form-control' id='rua' name='rua' value={FormData.rua} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Bairro:</label>
                        <input type='text' className='form-control' id='bairro' name='bairro' value={FormData.bairro} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Estado:</label>
                        <input type='text' className='form-control' id='estado' name='estado' value={FormData.estado} onChange={handleChange}/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Biografia:</label>
                        <textarea className='form-control' id='bio' name='bio' value={FormData.bio} onChange={handleChange}/>
                    </div>
                    <button className='btn btn-primary me-2'>SALVAR</button>
                    <button className='btn btn-secondary'>CANCELAR</button>
                </div>

            </div>

        </div>
    )
}

export default EditProfile;