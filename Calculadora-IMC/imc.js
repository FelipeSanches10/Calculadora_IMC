const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'você já está acima do peso!';
        } else if (valorIMC < 35) {
            classificacao = 'você já esta com obesidade grau 1';
        } else if (valorIMC < 40) {
            classificacao = 'você já esta com obesidade grau 2';
        } else {
            classificacao = 'você já esta com obesidade grau 3, Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);