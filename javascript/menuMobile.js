let menu_mobile = document.getElementById("menuMobile")

menu_mobile.addEventListener('click' , togglemenu)
function togglemenu(){
    let menu_mb = document.getElementById("menu")
    let icon_menu = document.getElementById("menu_mobile")
    menu_mb.classList.toggle("active")
    menu_mobile.classList.toggle("active")
}