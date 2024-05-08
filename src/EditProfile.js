import React, { useState } from 'react';
import './App.css';

function EditProfile({ edit, cancelEdit }) {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        rua: '',
        bairro: '',
        estado: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        edit(formData);
        cancelEdit();
    };

    return (
        <div className='col-md-12 mt-5 d-flex justify-content-center'>
            <div className='card form-profile'>
                <div className='card-header'>
                    <h3>Editar Perfil</h3>
                </div>
                <div className='card-body p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className='form-label'>Nome:</label>
                            <input type='text' className='form-control' id='nome' name='nome' value={FormData.nome} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Idade:</label>
                            <input type='number' className='form-control' id='idade' name='idade' value={FormData.idade} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Rua:</label>
                            <input type='text' className='form-control' id='rua' name='rua' value={FormData.rua} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Bairro:</label>
                            <input type='text' className='form-control' id='bairro' name='bairro' value={FormData.bairro} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Estado:</label>
                            <input type='text' className='form-control' id='estado' name='estado' value={FormData.estado} onChange={handleChange} />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Biografia:</label>
                            <textarea className='form-control' id='bio' name='bio' value={FormData.bio} onChange={handleChange} />
                        </div>
                        <button className='btn btn-primary me-2'>SALVAR</button>
                        <button className='btn btn-secondary' onClick={cancelEdit}>CANCELAR</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default EditProfile;