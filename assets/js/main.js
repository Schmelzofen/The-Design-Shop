let mobileMenu = document.getElementById("mobileMenu")
let mobileMenuList = document.getElementById("mobileMenuList")
let contact = document.getElementById("contact")
let messageSent = document.getElementById("messageSent")

/* Ich wollte gewährleisten, das die Forms nicht koexistieren können, deshalb soviel toggle/remove/add - das geht wahrscheinlich effektiver, aber ich hab es nicht hingekriegt */


function toggleMenu(){
    mobileMenu.classList.toggle("down")
    mobileMenuList.classList.toggle("show")
    mobileMenuList.classList.toggle("transition")
}

function toContactMobile(){
    mobileMenu.classList.toggle("down")
    mobileMenuList.classList.toggle("show")
    mobileMenuList.classList.remove("transition")
    contact.classList.remove("contactShow")
    messageSent.classList.add("contactShow2")
}

function toContactDesktop(){
    contact.classList.remove("contactShow")
    messageSent.classList.add("contactShow2")
}

function sendMessage(){
    contact.classList.toggle("contactShow")
    messageSent.classList.remove("contactShow2")
}

function closeWindow(){
    messageSent.classList.toggle("contactShow2")
}