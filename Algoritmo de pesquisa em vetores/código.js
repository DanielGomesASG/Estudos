function findNum() {
  let vet = new Array(5)
  let num = undefined
  let pos = 0
  let searchValue = 0

  for (i = 0; i < vet.length; i++) {
    vet[i] = prompt(`Digite o número ${i + 1} da lista de ${vet.length} números:\n`)
  }

  num = prompt("Qual número gostaria de pesquisar na lista?\n")

  while (pos < vet.length && vet[pos] != num) {
    pos++
  }

  if (vet[pos] === num) {
    // A variável searchValue é passada ao invés de num no console, para confirmar mais uma vez que o número encontrado é o solicitado
    searchValue = vet[pos]
    console.log(`Esse é o número solicitado: ${searchValue}`)
    console.log(`Essa é a posição em que ele foi encontrado: ${pos}`)
  } else {
    console.log(`Não há um valor igual a ${num} na lista!`)
  }
}

findNum()

// _______________________________________________________________________________________________
// Mesmo resultado, utilizando forEach

// let vet = new Array(5)

// function vetValues() {
//   for (i = 0; i < vet.length; i++) {
//     vet[i] = prompt(`Digite o número ${i + 1} da lista de ${vet.length} números:\n`)
//   }
//   searchNum()
// }

// function searchNum() {
//   let num = prompt("Qual número gostaria de pesquisar na lista?\n")
//   let pos = -1
//   let searchValue = 0

//   vet.forEach(function (value, i) {
//     if (value === num) {
//       pos = i
//       searchValue = value
//     }
//   })

//   if (pos != -1) {
//// A variável searchValue é passada ao invés de num, no console, para confirmar mais uma vez que o número encontrado é o solicitado
//     console.log(`Esse é o número solicitado e encontrado: ${searchValue}`)
//     console.log(`Essa é a posição em que ele foi encontrado: ${pos}`)
//   } else {
//     console.log(`Não há um valor igual a ${num} na lista!`)
//   }
// }

// vetValues()