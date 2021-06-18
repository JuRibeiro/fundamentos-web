//var(variavel de escopo global) let(atualização do equima script) const(variavel constante, nao 
//                                                                            muda o valor)
//boas praticas (js linguagem principal de front na web)
//as variaveis de js não são tipadas (int string etc)
//funcoes são blocos de codigo
//acessando o input pelo id nome

/* 
Case sensitive= reconhece letras maiusculas e minusculas

Podemos acessar o DOM:
por tag: geteElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Nome: getElementsByClassName()
por Seletor: querySelector()
*/

let nome= window.document.getElementById("nome")
let email= document.querySelector("#email")
let assunto= document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa= document.querySelector("#mapa")

nome.style.width='100%'
email.style.width='100%'
assunto.style.width = '100%'

function validaNome()
{
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3)
    {
        txtNome.innerHTML="Nome inválido!"
        txtNome.style.color="red"
    }
    else
    {
        txtNome.innerHTML="Nome válido"
        txtNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail ()
{
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color="red"
    }
    else
    {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color="green"
        emailOk = true
    }
}

function validaAssunto()
{
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 200)
    {
        txtAssunto.innerHTML="Digite no máximo 200 caracteres"
        txtAssunto.style.color= "red"
        txtAssunto.style.display = 'block'
    }
    else 
    {
        /*txtAssunto.innerHTML="Você ainda pode digitar algo a mais se quiser, limite: 200 caracteres"
        txtAssunto.style.color= "green"*/
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar ()
{
    if(nomeOk==true && emailOk==true && assuntoOk==true)
    {
        alert('Formulário enviado com sucesso!')
    }
    else
    {
        alert ('Preencha o formulário conrretamente antes de envia-lo')
    }

}

function mapaZoom ()
{
    mapa.style.width='800px'
    mapa.style.height='600px'
}

function mapaNormal ()
{
    mapa.style.width='400px'
    mapa.style.height='250px'
}