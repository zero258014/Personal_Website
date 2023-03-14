const bar = document.getElementsByClassName("bar");
let percent = document.getElementsByClassName("percent");
let y = 0;

window.addEventListener("scroll", () => {
  y = window.pageYOffset;
  if (y > 2150) {
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.transition = "all 1s ease-in-out";
      bar[i].style.width = percent[i].innerHTML;
    }
  }
});

let a = document.getElementsByClassName("about-link");
let p = document.getElementsByClassName("portfolio-link");
let s = document.getElementsByTagName("span");

a[0].addEventListener("mouseover", () => {
  a[0].style.transition = "all 0.5s ease";
  a[0].style.backgroundColor = "rgb(58, 58, 255)";
  a[0].style.color = "white";
  a[0].style.width = "100%";
  p[0].style.visibility = "hidden";
  s[0].innerHTML = "";
});

a[0].addEventListener("mouseleave", () => {
  a[0].style.transition = "all 0.5s ease";
  a[0].style.backgroundColor = "rgb(254, 255, 244)";
  a[0].style.color = "rgb(58, 58, 255)";
  a[0].style.width = "50%";
  p[0].style.visibility = "visible";
  s[0].innerHTML = "|";
});

p[0].addEventListener("mouseover", () => {
  p[0].style.transition = "all 0.5s ease";
  p[0].style.backgroundColor = "rgb(58, 58, 255)";
  p[0].style.color = "white";
  p[0].style.width = "100%";
  a[0].style.visibility = "hidden";
  s[0].innerHTML = "";
});

p[0].addEventListener("mouseleave", () => {
  p[0].style.transition = "all 0.5s ease";
  p[0].style.backgroundColor = "rgb(254, 255, 244)";
  p[0].style.color = "rgb(58, 58, 255)";
  p[0].style.width = "50%";
  a[0].style.visibility = "visible";
  s[0].innerHTML = "|";
});
