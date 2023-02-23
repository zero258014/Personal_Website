// const canvas = document.getElementById("nav-bar-draw");

// if (canvas.getContext) {
//     console.log("true")
//     const ctx = canvas.getContext("2d");
//     // 薄雲鼠 うすくもねず #d4dcda 東雲色 しののめいろ #f19072
//     const icon_color = "#455765"

//     // first line
//     ctx.beginPath();
//     ctx.fillStyle = icon_color;
//     ctx.fillRect(130, 20, 100, 30);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(135, 35, 15, Math.PI * 0.5, Math.PI * 1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(230, 35, 15, Math.PI * -0.5, Math.PI * -1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();
//     ctx.beginPath();

//     ctx.beginPath();
//     ctx.fillRect(170, 50, 20, 30)
//     ctx.stroke();

//     //second line
//     ctx.fillStyle = icon_color;
//     ctx.fillRect(40, 65, 220, 30);
//     ctx.closePath();
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(45, 80, 15, Math.PI * 0.5, Math.PI * 1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(260, 80, 15, Math.PI * -0.5, Math.PI * -1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();

//     ctx.beginPath();
//     ctx.fillRect(95, 95, 20, 30)
//     ctx.stroke();

//     // third line
//     ctx.beginPath();
//     ctx.fillStyle = icon_color;
//     ctx.fillRect(70, 110, 130, 30);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(75, 125, 15, Math.PI * 0.5, Math.PI * 1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(195, 125, 15, Math.PI * -0.5, Math.PI * -1.5, false)
//     ctx.fillStyle = icon_color;
//     ctx.closePath();
//     ctx.fill();
// }

const aboutMe = document.getElementById("about-me-link");
const resume = document.getElementById("resume-link");
const sideProjects = document.getElementById("side-projects-link");
// const github = document.getElementById("github")

let links = [aboutMe, resume, sideProjects];

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", () => {
    // links[i].style.color = "#c80c0c";
    // links[i].style.fontSize = "24px";
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
    // links[i].style.fontSize = "20px";
    links[i].style.transform = "scale(0.9, 0.9) translate(-5px,0px)";
    if (i === 0) {
      links[i].innerText = "About Me";
    } else if (i === 1) {
      links[i].innerText = "Resume";
    } else if (i === 2) {
      links[i].innerText = "Side Projects";
    }
  });
}
