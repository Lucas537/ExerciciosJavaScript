
//AULA 3
// Exportando uma função para ser usado em outro arquivo




//AULA 4
// Criando um modulo no seu projeto
// Exportar as funcionalidades desse modulo

export function calcularIMC(peso, altura) {
  return peso / (altura * altura)
}


export const tabelaIMC = [
  {limite: 10.5, classificacao:"Magro"},
  {limite: 15.9, classificacao:"Normal"},
  {limite: 20.9, classificacao:"Sobrepeso"},
  {limite: 28.7, classificacao:"Obesidade Grau I"},
  {limite: 30.5, classificacao:"Obesidade Grau II"},
  {limite: 45.0, classificacao:"Obesidade Grau III"},
  
]


