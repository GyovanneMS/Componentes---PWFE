'use strict'

import './card-aluno.js' 
import { infoAlunos } from './api.js'

//https://testeleonid.herokuapp.com/alunos

// const cardCursos = (object) => {
//     const cursos = object;
//     let card = document.createElement('a');
//     card.classList.add('card')
//     card.setAttribute("id", `${cursos.Sigla}`)
//     card.innerHTML = `<img src="${cursos.Icone}" alt=""> <span>${cursos.Sigla}</span>`;
//     console.log(cursos.Sigla)
//     card.onclick = abrir
//     card.href = './pages/turma.html'
//     return card
// }

// const showCards = async () => {
//     let card = await infoCursos();
//     let cardsShow = card.map(cardCursos)
//     cursos.replaceChildren(...cardsShow)
// }

// showCards()

const cardAlunos = (object) => {
    const alunos = object;
    const card = document.createElement('card-aluno');
    card.nome = alunos.nome;
    card.classe = alunos.turma;
    card.image = alunos.foto;
    card.bgcolor = mudarCor(object.status);

    return card;
}

const mudarCor = (objectColor) => {
    let cor = objectColor;

    if(cor == 'aprovado'){
        return 'yellow';
    } else if ( cor == 'desistente'){
        return 'red';
    } else if (cor == 'reprovado'){
        return 'green';
    }
}

const showCards = async () => {
    const conteiner = document.querySelector('.conteiner');
    let card = await infoAlunos();
    let cardsShow = card.map(cardAlunos);

    conteiner.append(...cardsShow);
}

showCards()