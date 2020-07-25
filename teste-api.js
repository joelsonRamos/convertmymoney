const axios = require('axios')

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/vers...${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

axios
.get(url)
.then(res => console.log(res.data.value[0].cotacaoVenda))
.catch(err => console.log(err))