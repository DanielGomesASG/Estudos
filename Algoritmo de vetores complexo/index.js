"use strict";

// ARRAYS PARA VARIEDADE DE CASOS ____________________________________________________________________________________

// Array fixo:
// const arr = new Array(10, 10, 8, 10, 15 ,8 , 8, 2, 4, 3, 5, 7, 1, 8, 1, 10, 12)

// Array aleatório de vinte a cinquenta posições:
// const arr = Array.from({ length: Math.floor(Math.random() * 31) + 20 }, () => Math.floor(Math.random() * 101));

// Array aleatório de vinte a cinquenta posições apenas de 0s e 1s:
// const arr = Array.from({ length: Math.floor(Math.random() * 31) + 20 }, () => Math.floor(Math.random() * 2));

// Array aleatório de cem posições:
// const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));

//ARRAY PADRÃO _______________________________________________________________________________________________________

// Array aleatório de cinco a quinze posições:
const arr = Array.from({ length: Math.floor(Math.random() * 11) + 5 }, () => Math.floor(Math.random() * 101));

function subSets(arr) {
  const arrCopy = arr.slice()
  arrCopy.sort((a, b) => b - a)

  function minimalEl() {
    // Achar a posição do elemento mínimo
    let restSum = 0
    let sum = 0

    for (let i = 0; i < arrCopy.length; i++) {
      if (sum <= restSum) {
        sum += arrCopy[i]
        restSum = 0
        for (let cont = i + 1; cont < arrCopy.length; cont++) {
          restSum += arrCopy[cont]
        }
      } else {
        return [i, sum, restSum]
      }
    }
  }

  // Atribuir a uma constante a posição do elemento mínimo
  const end = minimalEl(arrCopy)[0]

  // Recortar os elementos necessários do array
  const subA = arrCopy.slice(0, end)
  const subB = arrCopy.slice(end)

  const sum = minimalEl(arrCopy)[1]
  const restSum = minimalEl(arrCopy)[2]

  subA.sort((a, b) => a - b)
  subB.sort((a, b) => a - b)

  return [subA, subB, sum, restSum]
}

function elQ (sub) {
  let q = null
  for (let i = 0; i < sub.length; i++) {
    q = i + 1
  }
  return q
}

const result = subSets(arr)

const subA = result[0]
const subB = result[1]

const sumA = result[2]
const sumB = result[3]

const qSubA = elQ(result[0])
const qSubB = elQ(result[1])

console.log(`Array Original:\n\n ${arr}`, `\n\nQuantidade mínima de valores cuja soma é maior que a soma do restante:\n\n Quantidade: ${qSubA}\n Valores: ${subA}\n Soma: ${sumA}`, `\n\nValores restantes:\n\n Quantidade: ${qSubB}\n Valores: ${subB}\n Soma: ${sumB}`)
