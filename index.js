const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordSizeEl = document.getElementById("password-size")
let generateEl = document.getElementById("generate-btn")
let firstPasswordEl = document.getElementById("password-one")
let secondPasswordEl = document.getElementById("password-two")
let firstPassword = ""
let secondPassword = ""

function generatePassword(num) {
    let password = ""
    for (let i = 0; i < num; i++){
        let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
        password += randomCharacter
    }
    return password
}

function passwordFiller() {
    if (passwordSizeEl.value > 20){
        firstPassword = generatePassword(20)
        secondPassword = generatePassword(20)
        passwordSizeEl.value = 20
    } else {
        firstPassword = generatePassword(passwordSizeEl.value)
        secondPassword = generatePassword(passwordSizeEl.value)
    }
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
}

function passwordClick(num) {
    if (num === 1) {
        navigator.clipboard.writeText(firstPasswordEl.textContent)
        alert("Password Copied to Clipboard")
    } else {
        navigator.clipboard.writeText(secondPasswordEl.textContent)
        alert("Password Copied to Clipboard")
    }
}
