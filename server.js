// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); // Importe o módulo path

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'todos'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados bem-sucedida');
});

// Defina o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para testar a conexão com o banco de dados
app.get('/testdb', (req, res) => {
    connection.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('Erro ao testar a conexão com o banco de dados:', err);
            res.status(500).send('Erro ao testar a conexão com o banco de dados');
        } else {
            console.log('Conexão com o banco de dados bem-sucedida');
            res.status(200).send('Conexão com o banco de dados bem-sucedida');
        }
    });
});

// Rota para obter todas as tarefas
app.get('/todos', (req, res) => {
    connection.query('SELECT * FROM todos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar tarefas:', err);
            res.status(500).json({ error: 'Erro ao buscar tarefas' });
            return;
        }
        const todos = results.map(row => ({ task: row.task }));
        res.json(todos);
    });
});

// Rota para adicionar uma nova tarefa
app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
        res.status(400).json({ error: 'A tarefa não pode estar vazia' });
        return;
    }
    connection.query('INSERT INTO todos (task) VALUES (?)', [task], (err, results) => {
        if (err) {
            console.error('Erro ao adicionar tarefa:', err);
            res.status(500).json({ error: 'Erro ao adicionar tarefa' });
            return;
        }
        res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
    });
});

// Rota para lidar com a rota raiz
app.get('/', (req, res) => {
    // Envie o arquivo HTML da página inicial
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
