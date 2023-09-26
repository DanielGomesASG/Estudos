let user = new Object()
user.nome = "Daniel"
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

let comidaOriginal = prompt("Olá, em nossa loja você encontrará MUITA variedade, MUITA mesmo, dê uma olhada no cardápio!\nCarne R$0!\nPão R$0!\nPode escolher, demore o quanto precisar XD!")

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
  alert("Hmmmm que delícia ein, seu buchinho agora está cheio.\n Nossa quanta fome, seu pãozinho até acabou.\n\nMuito obrigado pela visita! Volte Sempre!!! XD")
} else if (comida === "carne") {
  alert("Hmmmm que delícia ein, seu buchinho agora está cheio, sua carninha só tem mais " + carne.t + " mordidinhas, já embalamos para viagem, assim vc pode se deliciar depois.\n\nMuito obrigado pela visita! Volte Sempre!!! XD ")
}