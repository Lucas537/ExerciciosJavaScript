//  soma
export function soma(a, b) {
    return a + b;
  }
  
  //  subtração
  export function subtracao(a, b) {
    return a - b;
  }
  
  // multiplicação
  export function multiplicacao(a, b) {
    return a * b;
  }
  
  //  divisão
  export function divisao(a, b) {
    if (b === 0) {
      return "Erro: Divisão por zero";
    }
    return a / b;
  }
  