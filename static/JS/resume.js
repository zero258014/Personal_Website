const bar = document.getElementsByClassName("bar")
let percent = document.getElementsByClassName("percent")
let y = 0;

window.addEventListener("scroll", () => {
    y = window.pageYOffset
    if (y > 2200) {
        for (let i = 0; i < bar.length; i++) {
            bar[i].style.transition = "all 1s ease-in-out"
            bar[i].style.width = percent[i].innerHTML
        }
    }
})





