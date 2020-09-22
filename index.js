const express = require('express')
const app = express()

//view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//routes

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/files',(req,res)=>{
    res.render('files')
})

//

app.listen(4040,(erro)=>{
    if(erro){
        console.log('Server erro!')
    }else{
        console.log('Server OK ...')
    }
})