const express = require('express');
const app = express();
const path = require('path');// similar to import in java libraries

//middleware
app.use(express.urlencoded({extended:true}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    //get current hour
    const date = new Date();
    const hour = date.getHours();

    const style = (hour >= 6 && hour < 18) ? 'day' : 'night';
    //response
    res.send(
`<!DOCtype html>
<html>
<head>
    <meta = charset ="utf-8">
    <title> Qn3</title>
     link rel = "stylesheet" href ="/css/${style}.css>
</head>
<body>
    <form = action="/result" method="post">
      <label>Name</label>
      <input type = " text" name = "name">
      <label>Age</label>
      <input type = "text" name = "age">
      <button type = "submit"> Submit Query>
   </form>
</body>
</html>
    `)
});
    app.post('/result', (req, res) => {
        const { name, age } = req.body;
    
        res.send(`Welcome ${name} ${age}`);
    });
    
    app.listen(3000, () => {
        console.log('App running on port 3000');
    })