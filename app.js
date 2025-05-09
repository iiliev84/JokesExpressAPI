import express from "express"
import jokes from "./jokes.js"
const app = express()

app.route('/jokes/random').get((req,res)=>{
    const random = Math.floor(Math.random() * jokes.length)
    res.send(jokes[random])
})

app.route('/jokes/:id').get((req,res)=>{
    const id = Number(req.params.id)
    const found = jokes.find(joke => joke.id == id)
    if(found){
        res.send(found)
    }else{
        res.status(404).send("Joke not found!")
    }
})

app.route('/jokes').get((req,res)=>{
    res.send(jokes)
})

app.route('/').get((req,res)=>{
    res.send("Are you ready to laugh?")
})

export default app