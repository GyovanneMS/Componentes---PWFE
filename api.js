'use strict'

const infoAlunos = async () => {
    const alunos = `https://testeleonid.herokuapp.com/alunos`

    const response = await fetch(alunos);

    const listaAlunos = await response.json();

    return listaAlunos
}

export {
    infoAlunos
}