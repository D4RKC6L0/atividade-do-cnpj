function multiplicarNumeros (array_base, array_multiplicacao){
    
let soma = 0
for (let i = 0; i<array_base.length; i++){
    soma += array_base[i] * array_multiplicacao[i]
}

let resto = soma % 11
let digito
if(resto< 2){
    digito = 0
} else{
    digito= 11 - resto
}
return digito
}

function gerarCNPJ () {

let numero_base = Math.floor(Math.random() * 100000000)
numero_base = numero_base.toString() + '0001'
let array_base = numero_base.split('')
let array_multiplicacao = [5,4,3,2,9,8,7,6,5,4,3,2]
let digito1 = multiplicarNumeros(array_base, array_multiplicacao)//* vai retornar o digito 1
array_base.push(digito1.toString())//pegar o digito um, acrescentar no array_base
array_multiplicacao.unshift(6)//acrescentar um valor no array multiplicação 
let digito2 = multiplicarNumeros(array_base, array_multiplicacao)
array_base.push(digito2.toString())

return array_base.join('')
}
let cnpj = gerarCNPJ()
console.log(cnpj)

//atividade 3 boleto:@@@

function validaEAN (cod_barros) {
if (cod_barras.length != 13) {
    return 'código inválido'
}

cod_barras=cod_barras.split('')
let soma = 0
for (let i = 0;cod_barras.length; i++){

    if(i % 2 == 0){
        soma += (cod_barras[i] * 3)
    }else {
        soma += (cod_barras [i])
    }
}
    let digito = 10 - soma%10
    if (digito != cod_barras[12]){}
    //pega a variavel soma, e ve quanta falta para o 

return 'código válido'
}

let codigo = '1122334455667'
let resultado = validaEAN(codigo)
console.log(resultado)