let launchImg = document.getElementById("launchImg")
let spaceportImg = document.getElementById("spaceportImg")
let capsuleImg = document.getElementById("capsuleImg")

let launchBtn = document.getElementById("launchBtn")
let spaceportBtn = document.getElementById("spaceportBtn")
let capsuleBtn = document.getElementById("capsuleBtn")

let launchS = document.getElementById("launchSection")
let spaceportS = document.getElementById("spaceportSection")
let capsuleS = document.getElementById("capsuleSection")

function btnSpaceport(){
    launchImg.classList.remove("active")
    capsuleImg.classList.remove("active")

    launchBtn.classList.remove("active")
    capsuleBtn.classList.remove("active")

    launchS.classList.remove("active")
    capsuleS.classList.remove("active")

    spaceportImg.classList.add("active")
    spaceportBtn.classList.add("active")
    spaceportS.classList.add("active")
}

function btnCapsule(){
    launchImg.classList.remove("active")
    spaceportImg.classList.remove("active")

    launchBtn.classList.remove("active")
    spaceportBtn.classList.remove("active")
    
    launchS.classList.remove("active")
    spaceportS.classList.remove("active")

    capsuleImg.classList.add("active")
    capsuleBtn.classList.add("active")
    capsuleS.classList.add("active")
}

function btnLaunch(){
    spaceportImg.classList.remove("active")
    capsuleImg.classList.remove("active")

    spaceportBtn.classList.remove("active")
    capsuleBtn.classList.remove("active")

    spaceportS.classList.remove("active")
    capsuleS.classList.remove("active")

    launchImg.classList.add("active")
    launchBtn.classList.add("active")
    launchS.classList.add("active")
}