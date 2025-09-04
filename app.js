alert('Bem vindo ao sorteador amigo secreto!');
let participantes = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    let nomeExiste = participantes.some(participante => participante.toLowerCase() === nomeAmigo.toLowerCase());

    if(nomeExiste) {
    alert('Este nome já foi adicionado!');
    return;
    }

    if(nomeAmigo !== '') {
    participantes.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    atualizarLista();

    } else {
    alert(' Por favor, insira um nome.');
    }
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < participantes.length; i++) {
    let item = document.createElement('li');
    item.textContent = participantes[i];
    listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(participantes.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * participantes.length);  
    let amigoSorteado = participantes[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    } else {
    alert('Não há amigos para sortear!');
    }
}