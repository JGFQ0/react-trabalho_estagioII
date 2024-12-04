const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_banco'
})

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err)
        return
    }
    console.log('Conectado ao banco de dados MySQL')
})

// Método POST para inserir valores no banco de dados
app.post('/agendamento', (req, res) => {
    const { nome, data, horario, esporte } = req.body

    //Checar registros parecidos:
    const checarRegParecidos = 'SELECT * FROM agendamentos WHERE data = ? AND horario = ?'
    db.query(checarRegParecidos, [data, horario], (err, results) => {
       
        //Estrutura condicional que checa os registros parecidos
        if (results.length > 0) {
            return res.status(401).json({ message: 'DATA e HORÁRIO já foram registrados anteriormente no banco de dados.'})
        }
        else {
            const query = 'INSERT INTO agendamentos (nome, data, horario, esporte) VALUES (?, ?, ?, ?)'
            db.query(query, [nome, data, horario, esporte], (err, result) => {
                res.json({ message: 'Agendamento realizado com sucesso!' })
            })
        }
    })
})

// Método GET para fazer as buscas filtradas
app.get('/agendamento', (req, res) => {
    const nome = req.query.nome ? `%${req.query.nome}%` : '%'
    const query = 'SELECT * FROM agendamentos WHERE nome LIKE ?'

    db.query(query, [nome], (err, results) => {
        if (err) {
            console.error('Erro ao buscar agendamentos:', err)
            res.status(500).json({ message: 'Erro ao buscar agendamentos' })
            return
        }
        res.json(results)
    })
})

// Método PUT para fazer as atualizações de dados com base no id
app.put('/agendamento/:id', (req, res) => {
    const { nome, data, horario, esporte } = req.body
    const { id } = req.params

    //Checar registros parecidos:
    const checarRegParecidos = 'SELECT * FROM agendamentos WHERE data = ? AND horario = ?'
    db.query(checarRegParecidos, [data, horario], (err, results) => {
           
        //Estrutura condicional que checa os registros parecidos
        if (results.length > 0) {
            return res.status(401).json({ message: 'DATA e HORÁRIO já foram registrados anteriormente no banco de dados.'})
        }
        //Obs: Não consegue realizar a atualização de dados pois se já existir um...
        //...registro parecido mesmo que seja um item correspondente ao registro no banco...
        //...o código não permite atualizar.
        else {
            const query = 'UPDATE agendamentos SET nome = ?, data = ?, horario = ?, esporte = ? WHERE id = ?'
            db.query(query, [nome, data, horario, esporte, id], (err, result) => {
                res.json({ message: 'Agendamento atualizado com sucesso!' })
            })
        }
    })
})

// Método DELETE para deletar os dados com base no id
app.delete('/agendamento/:id', (req, res) => {
    const { id } = req.params

    const query = 'DELETE FROM agendamentos WHERE id = ?'
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar agendamento:', err)
            res.status(500).json({ message: 'Erro ao deletar agendamento' })
            return
        }
        res.json({ message: 'Agendamento deletado com sucesso!' })
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})