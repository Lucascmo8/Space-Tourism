let moonImg = document.getElementById("moonImg")
let marsImg = document.getElementById("marsImg")
let europaImg = document.getElementById("europaImg")
let titanImg = document.getElementById("titanImg")

let moonBtn = document.getElementById("moonBtn")
let marsBtn = document.getElementById("marsBtn")
let europaBtn = document.getElementById("europaBtn")
let titanBtn = document.getElementById("titanBtn")

let moonS = document.getElementById("moonSection")
let marsS = document.getElementById("marsSection")
let europaS = document.getElementById("europaSection")
let titanS = document.getElementById("titanSection")


function btnMars(){
    moonImg.classList.remove("active")
    europaImg.classList.remove("active")
    titanImg.classList.remove("active")

    moonBtn.classList.remove("active")
    europaBtn.classList.remove("active")
    titanBtn.classList.remove("active")

    moonS.classList.remove("active")
    europaS.classList.remove("active")
    titanS.classList.remove("active")

    marsImg.classList.add("active")
    marsBtn.classList.add("active")
    marsS.classList.add("active")
}

function btnEuropa(){
    moonImg.classList.remove("active")
    marsImg.classList.remove("active")
    titanImg.classList.remove("active")

    moonBtn.classList.remove("active")
    marsBtn.classList.remove("active")
    titanBtn.classList.remove("active")
    
    moonS.classList.remove("active")
    marsS.classList.remove("active")
    titanS.classList.remove("active")

    europaImg.classList.add("active")
    europaBtn.classList.add("active")
    europaS.classList.add("active")
}

function btnTitan(){
    moonImg.classList.remove("active")
    marsImg.classList.remove("active")
    europaImg.classList.remove("active")

    moonBtn.classList.remove("active")
    marsBtn.classList.remove("active")
    europaBtn.classList.remove("active")

    moonS.classList.remove("active")
    marsS.classList.remove("active")
    europaS.classList.remove("active")

    titanImg.classList.add("active")
    titanBtn.classList.add("active")
    titanS.classList.add("active")
}

function btnMoon(){
    marsImg.classList.remove("active")
    europaImg.classList.remove("active")
    titanImg.classList.remove("active")

    marsBtn.classList.remove("active")
    europaBtn.classList.remove("active")
    titanBtn.classList.remove("active")

    marsS.classList.remove("active")
    europaS.classList.remove("active")
    titanS.classList.remove("active")

    moonImg.classList.add("active")
    moonBtn.classList.add("active")
    moonS.classList.add("active")
}