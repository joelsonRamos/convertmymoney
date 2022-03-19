const express = require('express')
const app = express()
//tratamento do path
const path = require('path')

const convert = require('./lib/convert')
const apiBCB = require('./lib/api.bcb')
//necessario setar o view engine
app.set('view engine', 'ejs')

app.set('views',path.join(__dirname, 'views'))

//local para por meus arquivos como css, html
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res)=>{
    const cotacao = await apiBCB.getCotacao()
    res.render('home', {
        cotacao
    })
    
})

app.get('/cotacao',(req, res)=>{
    const {cotacao, quantidade} = req.query
   
    if(cotacao && quantidade){
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.toManey(cotacao),
            quantidade: convert.toManey(quantidade),
            conversao: convert.toManey(conversao)
        })

    }else{
        res.render('cotacao',{
            error: 'Valores inválidos'
        })
    }
    
})

app.listen(3000, err=>{
    if(err){
        console.log('Não foi possivel iniciar a aplicação')
    }else{
        console.log('ConvertMyMoney esta online')
    }

})