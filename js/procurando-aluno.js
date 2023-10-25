const alunos = ["João", "Juliana", "Ana", "Caio"];
const notas = [10, 8, 7.5, 9];

const listaDeAlunosENotas = [alunos, notas];

function exibeNomeENota(aluno) {
    if (listaDeAlunosENotas[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosENotas;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    } else {
        console.log(`Aluno não encontrado!`)
    }
}
exibeNomeENota("Ana");