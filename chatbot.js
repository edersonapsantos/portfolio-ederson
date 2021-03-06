function responder(){

    var dialogo ={
        "Python":"É a linguagem de programação que mais me identifico. Atualmente estou estudadando o framework Django",
        "Objetivo":"O objetivo para o desenvolvimento deste site é não só para aprender e aperfeiçoar meus conhecimentos, mas também para divulgar alguns trabalhos",
        "ChatBot":"Este ChatBot foi desenvolvido em JavaScript",
        "Dev":"Atualmente sou um entusiasta da área de desenvolvimento",
    };

    var menu = "Olá! Para saber um pouco mais digite uma das seguintes opções: Python, Objetivo, ChatBot, Dev";

    var usuario = document.getElementById('userBox').value;

    const pergunta="pergunta";
    const resposta="resposta";

    if(usuario in dialogo){
        adcElemento(usuario, pergunta);
        adcElemento(dialogo[usuario], resposta);

    }else{
        adcElemento(usuario, pergunta);
        adcElemento(menu, resposta);
    }


    document.getElementById('userBox').value="";

    var chatHistory = document.getElementById("msgs");
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function adcElemento (usuario, classe) {
    var chat = document.getElementById('chat');
    var divNova = document.createElement('p');
    var conteudoNovo = document.createTextNode(usuario);
    divNova.className = classe;
    
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById('chatLog');
    chat.insertBefore(divNova, divAtual);

    //definindo uma classe
    //const divNew=document.querySelector(divNova);
    //divNova.classList.add(classe);
  }