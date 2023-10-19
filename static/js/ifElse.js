// 1

if ("0") {
    alert( 'Hello' );
  }

  // Sim, irá aparecer, pois uma string não vazia é booleano True.

  // 2

  let word = prompt("Qual o nome oficial do JavaScript?")

  if (word === "ECMAScript") {
    alert("Correto!")
  } else {
    alert("Você não sabe? É ECMAScript.")
  }

  // 3

  let number = +prompt("Digite um número")

  if (number > 0) {
    alert("1")
  } else if (number < 0) {
    alert("-1")
  } else {
    alert("0")
  }