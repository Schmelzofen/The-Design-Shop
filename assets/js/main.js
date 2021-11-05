let overlay = document.getElementById("overlay")
let main = document.getElementById("main")
let footer = document.getElementById("footer")

let contact = document.getElementById("contact")
let messageSent = document.getElementById("messageSent")

let email = document.getElementById("email")
let message = document.getElementById("message")
let fullName = document.getElementById("fullName")

function openMenu(){
    overlay.style.height = "100%"
    overlay.style.opacity = "1"
    overlay.style.position = "fixed"
}

function closeMenu(){
    overlay.style.height = "0%"
    overlay.style.opacity = "0"
}

function toContact(){
    contact.classList.remove("hide")
    contact.classList.add("show")
    contact.scrollIntoView()
    overlay.style.height = "0%"
    overlay.style.opacity = "0"
}

function sendMessage(){
    contact.classList.remove("show")
    contact.classList.add("hide")
    messageSent.classList.remove("hide")
    messageSent.classList.remove("show")
    console.log(fullName.value)
    console.log(email.value)
    console.log(message.value)
}

function closeWindow(){
    messageSent.classList.remove("show")
    messageSent.classList.add("hide")
}

function toContactMobile(){
    contact.classList.remove("hide")
    contact.classList.add("show")
    contact.scrollIntoView()
    overlay.style.opacity = "0"
}