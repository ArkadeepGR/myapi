const utils=require("./utils")
const express=require("express")
const app=express()
const port=process.env.PORT || 3000

app.get("",function(req,res){
    if(req.query.name)
    {
        utils.getData(req.query.name,function(error,response){
            if(!error)
                res.send(response)
            else
                res.send(error)
        })
    }
    else{
        res.send({Error:"Name query is mandatory"})
    }
})

/*
utils.getData("Arkadeep",function(error,response){
    if(!error)
        console.log(response)
    else
        console.log(error)
})
*/

app.listen(port,function(){
    console.log("Server up in port "+port)
})