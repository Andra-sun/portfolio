import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title) {
            alert('O campo "Título" é obrigatório!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('technologies', technologies);
        formData.append('link', link);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('http://localhost:5000/projetos', formData);
            console.log('Resposta do servidor:', response.data);
            setTitle('');
            setDescription('');
            setTechnologies('');
            setLink('');
            setImage(null);
        } catch (error) {
            console.error('Erro ao adicionar projeto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='formInp'
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className='formTxt'
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                className='formInp'
                type="text"
                placeholder="Tecnologias (separadas por vírgula)"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
            />
            <input
                className='formInp'
                type="text"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <input
                className='formInp'
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button className='formBtn' type="submit">Adicionar Projeto</button>
        </form>
    );
};

export default ProjectForm;
