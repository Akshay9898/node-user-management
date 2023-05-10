const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.get("/signup", function(req,res){
    res.render('register',{
        message:'data success'
    })
})
app.get("/login", function(req,res){
    res.render('login')
})

app.use('/', router)


app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})