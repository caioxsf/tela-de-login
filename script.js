function validarEmail ()
{
    var email = event.target.value;
    var regEx = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/); 

    var validacaoEmail = regEx.test(email);

    if(validacaoEmail)
        event.target.style.border="1px solid blueviolet"
    else

    {
        event.target.style.border="1px solid red"
        event.target.setAttribute('placeholder', 'Digite o e-mail corretamente!');
        event.target.value=""
    }
}

function validarSenha ()
{
    var senha = document.getElementById('senha').value;
    var regExCaracter = new RegExp(/[^a-zA-Z 0-9]+/g);
    var caracter = regExCaracter.test(senha);

    var regExLetraMai = new RegExp(/[a-zA-Z 0-9]+/g);
    var letraMai = regExLetraMai.test(senha);

    if(senha.length < 8)
    {
        document.getElementById('senha').value = "";
        document.getElementById('senha').setAttribute('placeholder', 'A senha não atinge os requisítos mínimos');  
        document.getElementById('senha').style.border="1px solid red";
    }
    else
    {
        document.getElementById('senha').style.border="1px solid blueviolet";
        setTimeout(()=> {
            alert('Formulário feito para treinar validações!')
        },50);
    }
         

    
        
}