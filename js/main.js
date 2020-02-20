//Strings
// var nome = "Jeferson D. S. Moreira";
// var idade = 26;
// var idade2 =  10;
// var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " +idade + " anos");
//alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

//Arrays
// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// console.log(lista);
// console.log(lista[1]);
// alert(lista[1]);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));

//Dicionarios
// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// console.log(frutas[0].nome);
// alert(frutas[1].nome);

//Condicionais , laços
// var idade = prompt("Qual a sua idade");
// if (idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count++;
// };


// var count;
// for(count = 1; count <= 5; count++){
//     alert(count);
// }

// var  d = new Date();
// alert(d.getMonth()+1);
// alert(d.getDay());


//Funções

// function soma(n1, n2){
//     return n1 + n2;
// }
// alert(soma(5, 10));

// function setReplace(frase, nome, novo_nome){
//     frase.replace(nome, novo_nome);
//     return frase
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar =  true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));


function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.4devs.com.br/");
    //mesma janela
    //window.location.href = "https://www.4devs.com.br/";
}

function trocar(elemento){
    
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";    
    elemento.innerHTML = "Passe o mouse aqui";    
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}