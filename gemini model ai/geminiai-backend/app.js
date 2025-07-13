const express = require('express');

const {main} = require('./geminiai');

const cors = require('cors');


const app = express();


app.use(cors());

app.use(express.json());

// app.use(express.urlencoded());

// app.get("/",(req,res)=>{
//     res.send(`<form action="/" method="post"><input type="text"  name = "question" /><button type="submit">Submit</button></form>`)
// })

app.post("/",async(req,res)=>{
    // console.log(req.body);
    // const question = req.body.question;
    // console.log(question);
    // const answer = await main(question);
    // res.send(answer)
    console.log(req.body.question);
    const question = req.body.question;
    const answer = await main(question);
    res.json({
        question : question,
        answer : answer
    })
})

app.listen(3006,()=>{
    console.log("Started...")
})