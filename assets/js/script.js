// alert('Javascript is working!');
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
const form = document.querySelector('form');// seleciona o elemento de formulário usando querySelector e armazena em uma variável chamada form

form.addEventListener("submit", function(event){ // criando função para o evento de submit do formulário
    event.preventDefault(); // previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    console.log('Formulario enviado!'); // exibe uma mensagem no console para indicar que o formulário foi enviado


    const nome = document.getElementById('nome').value; // obtém o valor do campo de nome e decodifica qualquer caractere special
    const email = document.getElementById('email').value; // obtém o valor do campo de email
   
    console.log(nome); // exibe o valor do campo de nome no console
    console.log(email); // exibe o valor do campo de email no console
    alert(nome); // exibe o valor do campo de nome em um alerta')



    if (nome.length < 3 ) {
        alert('O nome deve conter pelo menos 3 caracteres');
        return;
    }
    if (!email.includes('@')) {
        alert ('Email invalido. O email deve conter um "@"');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

document.getElementById('btnAlerta').addEventListener('click', function() {// adiciona um evento de clique ao botão de alerta
    alert('Botão de alerta clicado!');// exibe um alerta quando o botão de alerta é clicado
});

document.getElementById('btnCor').addEventListener('click', function() { // adiciona um evento de clique ao botão de mudar cor
// functio significa que quando o botão de mudar cor for clicado, a função dentro do addEventListener será executada

    document.body.style.backgroundColor = 'grey'; // muda a cor de fundo da página para azul escuro quando o botão de mudar cor é clicado

});

document.getElementById("btnConteudo").addEventListener('click', function() {
    document.getElementById("conteudo").innerHTML = "Texto alterado diretamente pelo JavaScript!";
});// adiciona um evento de clique ao botão de mudar conteúdo
// quando o botão de mudar conteúdo for clicado, a função dentro do addEventListener será executada
// a função altera o conteúdo do elemento com id "conteudo" para "Texto alterado diretamente pelo JavaScript!" usando innerHTML
