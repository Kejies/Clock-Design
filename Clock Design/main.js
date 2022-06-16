setInterval(() => {

    let jam = document.getElementById('jam');
    let menit = document.getElementById("menit");
    let detik = document.getElementById('detik');
    let sm = document.getElementById('sm');
    let dt = document.getElementById('dt');


    let j = new Date().getHours();
    let m = new Date().getMinutes();
    let d = new Date().getSeconds();

    let am = j >= 12 ? "PM" : "AM";

    if (j > 12 && am == "AM") {
        j = j - 24;
    }

    j = (j < 10) ? "0" + j : j
    m = (m < 10) ? "0" + m : m
    d = (d < 10) ? "0" + d : d

    jam.innerHTML = j  + " :";
    menit.innerHTML = m + " :";
    detik.innerHTML = d;
    sm.innerHTML = am;

    // 60 menit
    dt.style.strokeDashoffset = 565 - (565 * d) / 60;
})