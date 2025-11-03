const express = require('express');
const cors = require('cors');
const {sequelize, DataTypes } = require('seuquelize');
const { Sequelize, DATEONLY } = require('sequelize');

const seuqelize = new Sequelize("BackEnd", 'root', ' ',{
host: localhost,
dialect: mysql  
});

const Cliente = sequelize.define('Cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formaDepagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereço: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const Produto = sequelize.define('Produto',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validade: {
        type: DataTypes,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull
    },
    qunatidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const app = express ();
app.use(cors());
app.use(express());

const port = 3000;

app.get(('/'),(req, res) => {
    res.send('API está funcionando!');
})

app.get('/cliente',async (req,res) => 
    { const cliente = await Cliente.findAll();
    res.json(cliente);
});


app.post ('/cliente',async (req,res) => 
    { try {const {nome , email, telefone, formaDepagamento,endereço } = 
    req.body;
    const novoCliente = await Cliente.create({ nome, email, telefone, formaDepagamento, endereço})
    res.status(201).json(novoCliente);
    } catch (error) 
    {res.status(400).json({ mensagem: "E-mail já cadastrado." });
}});

app.get('/produto', async (req, res)=> {
    const produto = await Cliente.findAll();
    res.json(cliente);
});

app.post ('/produto',async (req,res) =>
    { try {const {nome, lote, validade, categoria,qunatidade} =
    req.body;
    } catch (error)
    {res.status(400).json({mensagem: "Produto invalido."});
   
}});

seuqelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`nodeAPI rodando em http://localhost:${port}`);
        console.log('Conectado ao banco de dados MySQL.');
    })
}).catch(err => {
    console.error('Não foi possivel conectar ao banco de dados:')
})