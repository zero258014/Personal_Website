const path = "./static/img/";
let java_files = ["fortune01.jpg", "fortune02.jpg"];
let rpg_files = ["rpg01.png", "rpg02.png", "rpg03.png"]
let mypage_files = ["mypage01.png", "mypage02.png", "mypage03.png", "mypage04.png"]
let java_element = document.getElementById("t1-pict");
let rpg_element = document.getElementById("t2-pict");
let mypage_element = document.getElementById("t4-pict");
let elements = [java_element, rpg_element, mypage_element];
let files = [java_files, rpg_files, mypage_files]
let java_count = -1;
let rpg_count = -1;
let mypage_count = -1;
let counts = [java_count, rpg_count, mypage_count]

for (let i = 0; i < elements.length; i++) {

    pict_change(counts[i], elements[i], files[i]);
}
// pict_change(java_element, java_files);


function pict_change(counts, elements, files) {
    console.log("aa")
    counts++;
    if (counts === files.length) {
        counts = 0
    }
    elements.src = path + files[counts];

    setTimeout(() => { pict_change(counts, elements, files); }, 3000);
}