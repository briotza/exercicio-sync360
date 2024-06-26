import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function EditProfile({ edit, cancelEdit, updateProfileData }) {
    // Armazenar Dados
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        rua: '',
        bairro: '',
        estado: '',
        bio: '',
    });

    // Status de Conexão
    const [databaseError, setDatabaseError] = useState(false);

    // Carregar dados do servidor
    useEffect(() => {
        // GET para obter dados
        axios.get('http://localhost:8800/usuarios/1')
            .then(response => {
                console.log('Dados do usuário recebidos:', response.data);
                const userDataFromApi = response.data;
                setFormData(userDataFromApi);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
                setDatabaseError(true);
            });
    }, []);

    // Função para mudança do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Função para envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validação obrigatória dos formulário
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && typeof formData[key] === 'string' && formData[key].trim() === '') {
                alert(`O campo ${key} é obrigatório`);
                return;
            }
        }
        // Atualizar dados
        updateProfile(formData);
        // Cancelar edição
        cancelEdit();
        // Recarregar página
        window.location.reload();
    };

    // Função para atualizar os dados
    const updateProfile = (data) => {
        // PATCH para atualizar usuário
        axios.patch('http://localhost:8800/usuarios/1', data)
            .then(response => {
                console.log('Dados do usuário atualizados:', response.data);
                updateProfileData(response.data);
            })
            .catch(error => {
                console.error('Erro ao atualizar dados do usuário:', error);
            });
    };

    // Lista dos estados
    const estadosBrasileiros = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
        "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
        "SP", "SE", "TO"
    ];

    return (
        <div className='col-md-12 mt-5 d-flex justify-content-center'>
            <div className='card form-profile'>
                <div className='card-header'>
                    {/*Sem conexão com o banco*/}
                    {databaseError ? (
                        <h3>Sem conexão com o banco de dados!</h3>
                    ) : (
                        <h3>Editar Perfil</h3>
                    )}
                </div>
                <div className='card-body p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            {/*Formulário*/}
                            <label className='form-label'>Nome:</label>
                            <input type='text' className='form-control' maxLength={60} id='nome' name='nome' value={formData.nome} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Idade:</label>
                            <input type='number' className='form-control' id='idade' name='idade' value={formData.idade} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Rua:</label>
                            <input type='text' className='form-control' maxLength={40} id='rua' name='rua' value={formData.rua} onChange={handleChange} required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Bairro:</label>
                            <input type='text' className='form-control' maxLength={40} id='bairro' name='bairro' value={formData.bairro} onChange={handleChange} required />
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
                            <textarea className='form-control' maxLength={400} id='bio' name='bio' value={formData.bio} onChange={handleChange} required />
                        </div>
                        {/*Botões Salvar e Cancelar*/}
                        <button className='btn btn-primary me-2'>SALVAR</button>
                        <button className='btn btn-secondary' onClick={cancelEdit}>CANCELAR</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default EditProfile;