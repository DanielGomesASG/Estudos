let vet = new Array(5)
let num = undefined
let pos = 0

function findNum() {
  for (i = 0; i < vet.length; i++) {
    vet[i] = prompt("Digite um número para adicionar a uma lista de cinco números:\n")
  }

  num = prompt("Qual número gostaria de pesquisar na lista?\n")

  while (pos < vet.length && vet[pos] != num) {
    pos++
  }

  if (vet[pos] === num) {
    console.log(`Esse é o número solicitado: ${num}`)
    console.log(`Essa é a posição em que ele foi encontrado: ${pos}`)
  } else {
    console.log(`Não há um valor igual a ${num} na lista`)
  }
}

findNum()