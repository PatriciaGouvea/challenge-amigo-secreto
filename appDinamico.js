alert('Bem-vindo ao sorteador de amigo secreto dinâmico!');

let participantes = [];
let resultadoSorteio = {};

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    let nomeExiste = participantes.some(participante => participante.toLowerCase() === nomeAmigo.toLowerCase());
    if (nomeExiste) {
        alert('Este nome já foi adicionado!');
        return;
    }

    participantes.push(nomeAmigo);
    document.getElementById('amigo').value = '';

    let btn = document.createElement("button");
    btn.innerText = nomeAmigo;
    btn.classList.add("btn-participante");

    btn.style.width = "200px";

    if (participantes.length % 2 === 0) {
        document.getElementById("botoesContainerRight").appendChild(btn);
    } else {
        document.getElementById("botoesContainerLeft").appendChild(btn);
    }

    btn.addEventListener("click", () => {
        if (!btn.dataset.cliqueAtivo) {
        let amigo = resultadoSorteio[nomeAmigo];
        if (!amigo) {
        alert("Ainda não foi sorteado!");
        return;
        }
        btn.innerText = `Seu amigo é ${amigo}`;
        setTimeout(() => {
        btn.style.transition = "transform 3s ease, opacity 3s ease, filter 3s ease";
        btn.style.transform = "scale(0.5)";
        btn.style.opacity = "0";
        btn.style.filter = "blur(8px)";
        setTimeout(() => btn.remove(), 3000);
        }, 5000);
        btn.dataset.cliqueAtivo = "true";
        }
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes!");
        return;
    }

    let sorteados = [...participantes];
    resultadoSorteio = {};

    participantes.forEach(p => {
        let possiveis = sorteados.filter(s => s !== p);

        if (possiveis.length === 0) {
            return sortearAmigo(); // refaz o sorteio se necessário
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultadoSorteio[p] = sorteado;
        sorteados.splice(sorteados.indexOf(sorteado), 1);
    });

    alert("Sorteio realizado com sucesso! 🎉\nCada participante deve clicar em seu próprio botão para descobrir quem é seu amigo secreto.");
}
