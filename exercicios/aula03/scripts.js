var n1 = Number.parseInt(window.prompt ('Digite um número.')); //string
var n2 = Number.parseInt(window.prompt ('Digite outro número.'));//string
var s = n1+n2
window.alert(`A soma entre ${n1} e.exit ${n2} é igual a ${s}.`) // + concatenação e adição
//number + number para adição
//string + string para concatenação
//window.prompt trata o conteúdo como string esta é uma característica do comando.
//Conversão string para number = Number.parseInt(n) de numero para numero inteiro
//Number.parseFloat(n) para numeros reais
//Para converter para string usamos String(n) ou n.tostring() Tambem podemos usar apenas Number para conversão para numeros 
//'Eu estou aprendendo s' = não faz interpolação
//'Eu estou aprendendo' +s = usa concatenação
//`Eu estou aprendendo ${s}` = usa template string
// s.length quantos caracteres a string tem 
// s.toUpperCase() tudo para MAIÚSCULAS
// s.toLowerCase tuso para minúsculas