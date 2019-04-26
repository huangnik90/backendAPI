var express = require('express')//untuk database pake express
var app = express()//ditampung di app
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.json()) //buat kirim data ke frontend js pake body parser
app.use(cors()) //buat penghubung ke react

const {movieRouter,categoryRouter,movcatRouter} = require('./routers')
 
app.use('/category',categoryRouter);
app.use('/movcat',movcatRouter);
app.use('/movie',movieRouter);



const port = 2000
app.get('/',(req,res)=>{
    res.send('Aktif Back End Exam Project API')
})
app.listen(port, () => console.log("aktif di port" + port))