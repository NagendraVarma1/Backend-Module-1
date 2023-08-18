const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {

    fs.readFile('username.txt', (err, data) => {
        if(err){
            console.log(err)
            data = 'No Chat Exists'
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="text" id="message" name="message"/>
            <input type="hidden" id="username" name="username" />
            <button type="submit">Send</button>
            <form>`
          );
    })
 
});

app.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err) => {
    err ? console.log(err) : res.redirect('/')
  })
});

app.get("/login", (req, res) => {
  res.send(
    `<form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type ='text' id='username' name='username'/>
    <button type='submit'>Login</button>
    </form>`
  );
});

app.post("/login", (req, res)=> {
    res.redirect('/')
})

app.listen(3000);
