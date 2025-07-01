const express = require('express');

const {main} = require('./geminiai');


const app = express();

app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send(`<form action="/" method="post"><input type="text"  name = "question" /><button type="submit">Submit</button></form>`)
})

app.post("/",async(req,res)=>{
    console.log(req.body);
    const question = req.body.question;
    console.log(question);
    const answer = await main(question);
    res.send(answer)
})

app.listen(3006,()=>{
    console.log("Started...")
})