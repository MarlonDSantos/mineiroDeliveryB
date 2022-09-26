// function home() {
//     window.location.href = "index.html";
// }
// function empresa() {
//     window.location.href = "empresa.html";
// }
// function clientes() {
//     window.location.href = "clientes.html";
// }
// function produtos() {
//     window.location.href = "produtos.html";
// }
// function contato() {
//     window.location.href = "contato.html";
// }

async function injectContent() {
    let url = location.href; //Pega o endereço da url
    // http://127.0.0.1:5500/mineiroDeliveryB/index.html?page=inicio
    file = url.split('='); //Divide o endereço pelo = e aplica os valores c/ array
    let view = (file[1] != undefined) ? file[1] : 'inicio';
    const resp = await fetch(`views/${view}.html`);//pega o valor apos o = da url e aplica no fetch
    // const resp = await fetch(`views/${file[1]}.html`);
    //o métdo fetch faz uma requisição ajax p/ um determinado local, neste caso para viws/arquivo.html
    const html = await resp.text(); //converte o resultado da fetch p/ testo
    let inject = document.getElementById('content');//Seleciona o destino p/ carregar arquivo
    // document.inject.insertAdjacentHTML("content", html);
    inject.innerHTML = html;// aplica a injeção de conteudo no container destino
}

function activeLink() {
    let url = location.href;
    let view = url.split('=');
    let sessao = (view[1] != undefined) ? view[1] : 'inicio';
    document.getElementById(sessao).className += ' active';
}
injectContent();
activeLink();