const express = require('express')
const app = express()

const herois = ["Homen Aranha", "Hulk", "Miss Marvel"]

//endpoint são os finais do link, oque esta depois do "/", nesse caso ele esta lendo toda a listagem
app.get("/heroes", function(req,res){
    res.send(herois)
})

app.get("/heroes/:id", function(req,res){
    //acessar o parametro ID
    const id  = req.params.id
    const umheroi = herois[id]
    res.send(umheroi)
})

//app.post()
//app.put()
//app.delete()


app.listen(3000)