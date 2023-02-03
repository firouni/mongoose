const express = require('express');
const connectddb = require('./config/connectdb');
const contactRouter = require("./routes/contact")

const app = express();
const port = 5000;

app.use(express.json())

connectddb()
app.use('/api/user',contactRouter)

app.listen(port,err=>{
    err?console.log(err) : console.log(`welcome on port num ${port}`)
})