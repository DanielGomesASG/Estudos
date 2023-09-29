let user = new Object()
user.b = 0
user.cheio = () => {
  if (user.b >= 10) {
    return true
  }
}

let pao = new Object()
pao.t = 12

let carne = new Object()
carne.t = 15

let comidaOriginal = prompt("Olá, em nossa loja você encontrará MUITA variedade, MUITA mesmo, pelo que eu vejo sua barriga precisa de 10 nutrientes para ficar cheia, dê uma olhada no cardápio!\n\nCarne: 15 mordidas, 2 nutrientes para cada\nPão: 12 mordidas, 1 nutriente para cada\n\nPode escolher, demore o quanto precisar!")

function removerAcentos(comidaOriginal) {
  return comidaOriginal.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const comida = removerAcentos(comidaOriginal.toLowerCase())

function comer(c) {
  if (c === "pao") {
    user.b += 1
    pao.t -= 1
  } else if (c === "carne") {
    user.b += 2
    carne.t -= 1
  } else {
    alert("Isso não está no cardápio! :/")
    process.exit()
  }
}

while (!user.cheio()) {
  comer(comida)
}

if (comida === "pao") {
  alert("Sua barriga agora está cheia!\nSeu pão só tem mais " + pao.t + " mordidas, já embalamos para viagem, assim vc pode se deliciar depois.\n\nMuito obrigado pela visita! Volte Sempre!!!")
} else if (comida === "carne") {
  alert("Sua barriga agora está cheia!\nSua carne só tem mais " + carne.t + " mordidas, já embalamos para viagem, assim vc pode se deliciar depois.\n\nMuito obrigado pela visita! Volte Sempre!!!")
}
