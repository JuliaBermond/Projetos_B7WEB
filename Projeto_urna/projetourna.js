let seuVotoPara = document.querySelector('.divisao-1-left-1 span');
let cargo = document.querySelector('.divisao-1-left-2 span');
let descricao_candidatos = document.querySelector('.divisao-1-left-4');
let aviso_tela = document.querySelector('.divisao-2');
let avatar_candidatos = document.querySelector('.divisao-1-right');
let numeros_candidatos = document.querySelector('.divisao-1-left-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for (let i = 0; i < etapa.numeros; i++){
        if(i===0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else{
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao_candidatos.innerHTML = '';
    aviso_tela.style.display = 'none';    
    avatar_candidatos.style.display = 'none';
    numeros_candidatos.innerHTML = numeroHtml
}

function atualizacaoInterface(){
    let etapa = etapas[etapaAtual];

    let fotosHtml = '';


    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        } else{
            return false
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao_candidatos.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        aviso_tela.style.display = 'block';

        for(let i in candidato.fotos){
            if(candidato.fotos[i].small) {
                fotosHtml += `<div class="divisao-1-right-images small"><img src="${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHtml += `<div class="divisao-1-right-images"><img src="${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            }
        }

        avatar_candidatos.innerHTML = fotosHtml;

    } else {
        seuVotoPara.style.display = 'block';
        aviso_tela.style.display = 'block';
        descricao_candidatos.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling != null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else{
            atualizacaoInterface();
        }    
    }
}

// function branco(){
//     alert('Branco')
// }

// function corrige(){
//     alert('Corrige')
// }

// function confirma(){
//     alert('Confirma')
// }

comecarEtapa();
