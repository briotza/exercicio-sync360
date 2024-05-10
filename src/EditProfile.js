import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

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
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && typeof formData[key] === 'string' && formData[key].trim() === '') {
                alert(`O campo ${key} é obrigatório`);
                return;
            }
        }
        edit(formData);
        cancelEdit();
    };

    const estadosBrasileiros = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
        "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
        "SP", "SE", "TO"
    ];

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
                            <input type='text' className='form-control' maxLength={60} id='nome' name='nome' value={FormData.nome} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Idade:</label>
                            <input type='number' className='form-control' id='idade' name='idade' value={FormData.idade} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Rua:</label>
                            <input type='text' className='form-control' maxLength={40} id='rua' name='rua' value={FormData.rua} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Bairro:</label>
                            <input type='text' className='form-control' maxLength={40} id='bairro' name='bairro' value={FormData.bairro} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Estado:</label>
                            <select className='form-control' id='estado' name='estado' value={formData.estado} onChange={handleChange} required>
                                <option value=''>Selecione um estado</option>
                                {estadosBrasileiros.map((estado, index) => (
                                    <option key={index} value={estado}>{estado}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Biografia:</label>
                            <textarea className='form-control' maxLength={400} id='bio' name='bio' value={FormData.bio} onChange={handleChange} required />
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