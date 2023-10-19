// Check the Login

let user = prompt("Quem é você? Para cancelar digite 'Cancele'")

if (user === "Admin"|| user === "Cancele") {
  if (user === "Cancele") {
    alert("Cancelado")
  } else {
    let password = prompt("Qual a senha?")
    if (password === "theMaster" || password === "Cancele") {
        if (password === "theMaster") {
            alert("Bem Vindo!")
        } else {
            alert("Cancelado")
        }
  } else {
    alert("Senha Incorreta.")
  }
}
} else {
  alert("Não conheço você.")
}
