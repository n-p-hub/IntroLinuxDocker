const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME
})

const app = express()
const port = 3000

app.get('/', (req, res) => {
  connection.connect()

  connection.query('SELECT 1 + 1 AS solucion', (err, rows, fields) => {
    if (err) throw err
    res.send('1 + 1 = ' + rows[0].solucion)
  })
  
  connection.end()  
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})
