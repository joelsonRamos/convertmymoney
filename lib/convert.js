const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}
const toManey = valor => {
    return parseFloat(valor).toFixed(2)
}

module.exports = {
    convert,
    toManey
}