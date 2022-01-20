function calculadora() {
    const operacao = prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - divisão real(/)\n 4 - multiplicação (*)\n 5 - divisão inteira (%)\n 6 - potenciação (**)')

if (!operacao || operacao >= 7) {
    alert('Erro-operação inválida!')
}else {
    let valor1 = Number(prompt('Digite o primeiro valor:'));
let valor2 = Number(prompt('Digite o segundo valor'));
let resultado;

if (!valor1 || !valor2) {
    alert('Erro - parâmetros inválidos!')
    calculadora();
}else {
    function soma() {
        resultado = valor1 + valor2;
        alert(`${valor1} + ${valor2} = ${resultado}`)
        novaoperacao();
    }
    function subtracao() {
        resultado = valor1 - valor2;
        alert(`${valor1} - ${valor2} = ${resultado}`)
        novaoperacao();
    }
    function divisaoReal() {
        resultado = valor1 / valor2;
        alert(`${valor1} / ${valor2} = ${resultado}`)
        novaoperacao();
    }
    function multiplicacao() {
        resultado = valor1 * valor2;
        alert(`${valor1} * ${valor2} = ${resultado}`)
        novaoperacao();
    }
    function divisapInteira() {
        resultado = valor1 % valor2;
        alert(`O resto da divisão entre ${valor1} e ${valor2} é igual à ${resultado}`)
        novaoperacao();
    }
    function potenciacao() {
        resultado = valor1 ** valor2;
        alert(`${valor1} elevado à ${valor2} é igual à ${resultado}`)
        novaoperacao();
    }
    
    if (operacao == 1) {
        soma();
    }else if (operacao == 2) {
        subtracao();
    }else if (operacao == 3) {
        divisaoReal();
    }else if (operacao == 4) {
        multiplicacao();
    }else if (operacao == 5) {
        divisapInteira();
    }else if (operacao == 6) {
        potenciacao();
    }
    
    function novaoperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        if (opcao == 1) {
            calculadora();
        }else if (opcao == 2) {
            alert('Até mais')
        }else {
            alert('Digite uma opção válida!')
            novaoperacao();
        }
    }
    
}

function soma() {
    resultado = valor1 + valor2;
    alert(`${valor1} + ${valor2} = ${resultado}`)
    novaoperacao();
}
function subtracao() {
    resultado = valor1 - valor2;
    alert(`${valor1} - ${valor2} = ${resultado}`)
    novaoperacao();
}
function divisaoReal() {
    resultado = valor1 / valor2;
    alert(`${valor1} / ${valor2} = ${resultado}`)
    novaoperacao();
}
function multiplicacao() {
    resultado = valor1 * valor2;
    alert(`${valor1} * ${valor2} = ${resultado}`)
    novaoperacao();
}
function divisapInteira() {
    resultado = valor1 % valor2;
    alert(`O resto da divisão entre ${valor1} e ${valor2} é igual à ${resultado}`)
    novaoperacao();
}
function potenciacao() {
    resultado = valor1 ** valor2;
    alert(`${valor1} elevado à ${valor2} é igual à ${resultado}`)
    novaoperacao();
}

if (operacao == 1) {
    soma();
}else if (operacao == 2) {
    subtracao();
}else if (operacao == 3) {
    divisaoReal();
}else if (operacao == 4) {
    multiplicacao();
}else if (operacao == 5) {
    divisapInteira();
}else if (operacao == 6) {
    potenciacao();
}

function novaoperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    }else if (opcao == 2) {
        alert('Até mais')
    }else {
        alert('Digite uma opção válida!')
        novaoperacao();
    }
}
    
}

let valor1 = Number(prompt('Digite o primeiro valor:'));
let valor2 = Number(prompt('Digite o segundo valor'));
let resultado;

function soma() {
    resultado = valor1 + valor2;
    alert(`${valor1} + ${valor2} = ${resultado}`)
    novaoperacao();
}
function subtracao() {
    resultado = valor1 - valor2;
    alert(`${valor1} - ${valor2} = ${resultado}`)
    novaoperacao();
}
function divisaoReal() {
    resultado = valor1 / valor2;
    alert(`${valor1} / ${valor2} = ${resultado}`)
    novaoperacao();
}
function multiplicacao() {
    resultado = valor1 * valor2;
    alert(`${valor1} * ${valor2} = ${resultado}`)
    novaoperacao();
}
function divisapInteira() {
    resultado = valor1 % valor2;
    alert(`O resto da divisão entre ${valor1} e ${valor2} é igual à ${resultado}`)
    novaoperacao();
}
function potenciacao() {
    resultado = valor1 ** valor2;
    alert(`${valor1} elevado à ${valor2} é igual à ${resultado}`)
    novaoperacao();
}

if (operacao == 1) {
    soma();
}else if (operacao == 2) {
    subtracao();
}else if (operacao == 3) {
    divisaoReal();
}else if (operacao == 4) {
    multiplicacao();
}else if (operacao == 5) {
    divisapInteira();
}else if (operacao == 6) {
    potenciacao();
}

function novaoperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    }else if (opcao == 2) {
        alert('Até mais')
    }else {
        alert('Digite uma opção válida!')
        novaoperacao();
    }
}

}

calculadora();

