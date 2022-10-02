let launch = document.querySelector("#launchImg")
let spaceport = document.querySelector("#spaceportImg")
let capsule = document.querySelector("#capsuleImg")
let menuMobile = document.querySelector("#menuMobile")

function troca(){
            
    var largura = window.innerWidth
    if(largura<=1100){
        launch.removeAttribute("src")
        spaceport.removeAttribute("src")
        capsule.removeAttribute("src")

        launch.setAttribute("src" , "imagens/naves/image-launch-vehicle-landscape.jpg")
        spaceport.setAttribute("src" , "imagens/naves/image-spaceport-landscape.jpg")
        capsule.setAttribute("src" , "imagens/naves/image-space-capsule-landscape.jpg")
    }else{
        launch.removeAttribute("src")
        spaceport.removeAttribute("src")
        capsule.removeAttribute("src")

        launch.setAttribute("src" , "imagens/naves/image-launch-vehicle-portrait.jpg")
        spaceport.setAttribute("src" , "imagens/naves/image-spaceport-portrait.jpg")
        capsule.setAttribute("src" , "imagens/naves/image-space-capsule-portrait.jpg")
    }
}
function modificar(){
    troca()
}

