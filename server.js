const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
    user: 'andra',
    host: 'localhost',
    database: 'porfolio_db',
    password: 'pitty',
    port: 5432,
});
app.use(cors());
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/projetos', upload.single('image'), async (req, res) => {
    try {
        console.log('Dados recebidos:', req.body);

        if (!req.body.technologies) {
            throw new Error('Tecnologias não foram enviadas');
        }

        const technologiesArray = req.body.technologies.split(',').map(item => item.trim());

        const query = 'INSERT INTO projetos (title, description, technologies, link) VALUES ($1, $2, $3::text[], $4) RETURNING *';
        const values = [req.body.title, req.body.description, technologiesArray, req.body.link];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao inserir projeto:', error);
        res.status(500).json({ error: 'Erro ao inserir projeto', details: error.message });
    }
});

app.get('/projetos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projetos');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        res.status(500).send('Erro ao buscar projetos');
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
