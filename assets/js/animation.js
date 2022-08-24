// Loading

window.addEventListener('load', function() {
    this.setTimeout(function() {
        document.querySelector(".loader-wrapper").style.display = "none";

        document.body.classList.remove('no-scroll');
    }, 2000);

    this.setTimeout(function() {
        document.body.classList.add('no-scroll');
    });
});

// Proggress Bar

let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let count = 0;
let num = 0;
let hun = 0
setInterval(() => {
    if (count == 93) {
        clearInterval();
    } else {
        count += 1;
        number.innerHTML = count + "%";
    }
}, 35);

setInterval(() => {
    if (num == 20) {
        clearInterval();
    } else {
        num += 1;
        number2.innerHTML = num;
    }
}, 144);


setInterval(() => {
    if (hun == 100) {
        clearInterval();
    } else {
        hun += 1;
        number3.innerHTML = hun + "%";
    }
}, 30);