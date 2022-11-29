const burger__btn = document.querySelector(".burger")

burger__btn.addEventListener("click", function (){
    const menu = document.querySelector(".burger__menu")
    menu.classList.toggle("show")
    burger__btn.classList.toggle("active")
})
