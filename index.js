const express = require('express')
const app = express()

const herois = ["Homen Aranha", "Hulk", "Miss Marvel"]

//endpoint são os finais do link, oque esta depois do "/", nesse caso ele esta lendo toda a listagem (READ ALL)
app.get("/heroes", function(req,res){
    res.send(herois)
})

app.get("/heroes/:id", function(req,res){
    //acessar o parametro ID
    const id  = req.params.id
    const umheroi = herois[id]
    res.send(umheroi)
})

//METODO POST READ SINGLE => [GET]

//req.body transforma toda a composição do corpo em json
app.use(express.json())
app.post("/heroes", function(req, res){
    res.send(req.body)
})
//app.put()
//app.delete()


app.listen(3000)