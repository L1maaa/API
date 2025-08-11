const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

const usuarios = []

app.post("/usuarios", (req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.send("Usuario cadastrado com sucesso!")
})

app.listen(port, ()=>{
    console.log("API RODANDO NA PORTA" + port)
})