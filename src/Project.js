import React, { useEffect, useState } from "react";
import axios from "axios";
import './Project.css';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/projetos');
                console.log('Projetos recebidos:', response.data);
                setProjects(response.data);
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        };
        fetchProjects();
    }, []);
    
    return (
        <div className="projetos">
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                        {project.image && <img src={project.image} alt={project.title} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Project;
