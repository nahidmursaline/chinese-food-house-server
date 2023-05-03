const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT ||5000;


const data = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Food is coming!')
})


app.get('/data', (req, res) =>{
  res.send(data);
})

app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const selectedData = data.find(d=> d.id == id);
  res.send(selectedData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})