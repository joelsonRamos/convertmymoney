const convert = require('./convert')

test('convert cotacao 4 and quantidade 4', ()=>{
    //quero converter 4 para 4
    // o que eu espero "expect"
    //esse teste funcionando
    //expect(convert.convert(4,4)).toBe(16)
    //esse teste dando erro
    expect(convert.convert(4,4)).toBe(16)
})

test('convert cotacao 0 and quantidade 4', ()=>{
    //quero converter 4 para 4
    // o que eu espero "expect"
    //esse teste funcionando
    //expect(convert.convert(4,4)).toBe(16)
    //esse teste dando erro
    expect(convert.convert(0,4)).toBe(0)
})

test('toManey converts floats', () =>{
    expect(convert.toManey(2)).toBe('2.00')
})