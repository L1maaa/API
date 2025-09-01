// npm init
//npm i express
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

//npm i mysql2
const db = require("./db")

app.get("/cliente", async (req, res) => {
    try{
        const resultado = await db.pool.query("SELECT * FROM cliente")
        res.status(200).json(resultado[0])
    } catch (erro){
        console.log(erro)
    }
})

app.listen(port, ()=>{
    console.log("API EXECUTANDO NA PORTA " + port)
})
