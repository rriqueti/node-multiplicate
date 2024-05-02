const express = require('express');
const router = express.Router();
const resultTab = require('../handlers/multiplicateHandler.js');

router.get('/', (req, res, next) => {
    const tabuada = req.query.tabuada;
    const sequencia = req.query.sequencia;
    i = 0;

    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada</title>
        <link rel="stylesheet" href="style.css">
    
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
    
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
            }
    
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
    
            .input-group {
                margin-top: 10px;
            }
    
            .input-group input {
                margin-right: 10px;
                padding: 5px;
            }
    
            .input-group button {
                padding: 5px 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
            }
    
            .input-group button:hover {
                background-color: #45a049;
            }
    
            .table-container {
                width: 50%;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
            }
    
            table {
                width: 100%;
                border-collapse: collapse;
            }
    
            table th,
            table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }
    
            table th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>Tabuada</h1>
                <div class="input-group">
                    <input type="number" id="tabuada" placeholder="Tabuada">
                    <input type="number" id="sequencia" placeholder="Sequência">
                    <button onclick="calcTabuada()">Gerar</button>
                </div>
            </div>
            <div class="table-container">
                <table id="tabuada-table">
                    <th>Tabuada
                        ${resultTab(tabuada, sequencia).map((i) => {
        return `<tr><td> ${i} </tr></td>`
    })}
                    </th>
    
    
                </table>
            </div>
        </div>
    
    </body>
    <script>
    function calcTabuada(){
        let tabuada = document.getElementById('tabuada').value;
        let sequencia = document.getElementById('sequencia').value;

        console.log({tabuada})

        window.location.href = "http://localhost:3000/multiplicate/?tabuada="+tabuada+"&sequencia="+sequencia;

    }
</script >

    </html > `
    );
})



module.exports = router;