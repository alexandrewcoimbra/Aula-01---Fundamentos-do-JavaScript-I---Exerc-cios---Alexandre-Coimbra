//Function min(a, b)

function min (numberFirst, numberSecond) {
    if (numberFirst < numberSecond || numberFirst === numberSecond)  {
        return numberFirst 
    } 
        return numberSecond
}


const numberFirst = +prompt("Digite um número")
const numberSecond = +prompt("Digite outro número")
alert(min(numberFirst,numberSecond))

//Function pow(x,n)

function pow (numberFirst2, power) {
    let mult = 1
    for (i = 1; i <= power; i++) {
        mult *= numberFirst2
    }
    return mult

}

const numberFirst2 = +prompt("Digite um número")
const power = +prompt("Digite o expoente")
alert(pow(numberFirst2,power))