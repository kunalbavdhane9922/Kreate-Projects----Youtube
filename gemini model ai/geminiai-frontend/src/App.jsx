import './App.css'
import { useEffect, useState } from 'react';
function App() {
  const [question,setQuestion] = useState("");
  const [history,setHistory] = useState([]);
      function SendingHandle(question){
          // console.log(question)
          fetch('http://localhost:3006/',{
            method :"POST",
            headers :{
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
              "question" : question
            })
          }).then(response=>response.json()).then((res) =>{
            setHistory(prev => [...prev,{
              "question" : res.question,
              "answer" : res.answer
            }])
          })
      }
      useEffect(()=>{
        console.log(history);
      },[history])
  return (
    <>
    <div id="main">
      <div className="upper-part">
        {history.map((item,key)=>(
          <div key = {key} id="conversation">
            <div id="question">{item.question}</div>
            <div id="answer">{item.answer}</div>
          </div>
        ))}
      </div>
      <div className="lower-part">
         <div id="search-bar">
        <input type="text" placeholder='   Type Here...' onChange={(e)=>{
            setQuestion(e.target.value);
        }}/>
        <button type='submit' onClick={()=>{
            SendingHandle(question)
        }}>Send</button>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
