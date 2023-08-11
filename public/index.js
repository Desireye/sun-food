const clickMenu = document.querySelector("#click-menu")
const menu = document.querySelector("#menu")
const loadBtn = document.querySelector("#load-btn")
const nothing = document.querySelector("#nothing")

clickMenu.addEventListener("click", function() {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    } else {
        menu.classList.add("hidden")
    }
})

loadBtn.addEventListener("click", function() {
    nothing.textContent = "There's no more my guy"
})