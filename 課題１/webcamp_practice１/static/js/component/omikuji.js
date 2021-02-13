let userName;
let userResult;

userName = prompt("お名前を入力して下さい");


let userGet = document.getElementById("js-user");

if (userName === "") {
    userGet.innerHTML = "名無しさん"
} else {
    userGet.innerHTML = userName;
}

const kuji = ["大吉", "中吉", "小吉", "末吉", "凶"]

document.getElementById("omikuji-get").onclick = function () {
    let omikuji = Math.floor(Math.random() * kuji.length);
    let omikujikekka = kuji[omikuji]
    document.getElementById("omikuji__kekka").innerHTML = omikujikekka;
    console.log(omikujikekka)
    if (omikujikekka === "凶" || omikujikekka === "末吉") {
        $("#omikuji__kekka").css({
            "color": "red"
        });
    } else {
        $("#omikuji__kekka").css({
            "color": "black"
        });
    }
    console.log("success");
};

document.getElementById("omikuji-reset").onclick = function () {
    document.getElementById("omikuji__kekka").innerHTML = "";
    console.log("reset");
};