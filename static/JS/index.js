const aboutMe = document.getElementById("about-me-link");
const resume = document.getElementById("resume-link");
const sideProjects = document.getElementById("side-projects-link");

let links = [aboutMe, resume, sideProjects];

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", () => {
    links[i].style.transition = "all 0.1s ease";
    links[i].style.color = "lightgreen";
    links[i].style.transform = "scale(1.1, 1.1) translate(5px,0px)";

    if (i === 0) {
      links[i].innerText = "私について";
    } else if (i === 1) {
      links[i].innerText = "経歴&職歴";
    } else if (i === 2) {
      links[i].innerText = "制作作品";
    }
  });

  links[i].addEventListener("mouseleave", () => {
    links[i].style.color = "white";
    links[i].style.transform = "scale(1, 1) translate(0px,0px)";
    if (i === 0) {
      links[i].innerText = "About Me";
    } else if (i === 1) {
      links[i].innerText = "Resume";
    } else if (i === 2) {
      links[i].innerText = "Portfolio";
    }
  });
}
