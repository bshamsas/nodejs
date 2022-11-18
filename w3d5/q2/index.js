const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended :true}));

app.get("/", (req, res)=>{
let form = `
<form action="/result" method="post" >
    <label>Name</label><input type = "text" name="name">
    <label>Age</label><input type = "text" name="age">
    <button type ="submit"> Submit Query</button>    
</form> `;
res.send(form);
});

app.post("/result" , (req, res) => {
    res.send(
        "Welcome, " + req.body.name + ". the age that you input is" + req.body.age
    );
});
 
 app.listen(3000, () => {
     console.log('App running on port 3000');
 })
