const canvas = document.getElementById("nav-bar-draw");

if (canvas.getContext) {
    console.log("true")
    const ctx = canvas.getContext("2d");
    // 薄雲鼠 うすくもねず #d4dcda 東雲色 しののめいろ #f19072
    const icon_color = "#f19072"

    // first line
    ctx.beginPath();
    ctx.fillStyle = icon_color;
    ctx.fillRect(130, 20, 100, 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(135, 35, 15, Math.PI * 0.5, Math.PI * 1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(230, 35, 15, Math.PI * -0.5, Math.PI * -1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();

    ctx.beginPath();
    ctx.fillRect(170, 50, 20, 30)
    ctx.stroke();

    //second line
    ctx.fillStyle = icon_color;
    ctx.fillRect(40, 65, 220, 30);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(45, 80, 15, Math.PI * 0.5, Math.PI * 1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 80, 15, Math.PI * -0.5, Math.PI * -1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillRect(95, 95, 20, 30)
    ctx.stroke();

    // third line
    ctx.beginPath();
    ctx.fillStyle = icon_color;
    ctx.fillRect(70, 110, 130, 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(75, 125, 15, Math.PI * 0.5, Math.PI * 1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(195, 125, 15, Math.PI * -0.5, Math.PI * -1.5, false)
    ctx.fillStyle = icon_color;
    ctx.closePath();
    ctx.fill();
}
