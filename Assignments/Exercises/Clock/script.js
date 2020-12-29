//displaying the date and time
// let date = new Date();
// console.log(date);
let clocks = function clock() {   
    let date = new Date();
    let hors = date.getHours();
    let minuts = date.getMinutes();
    let secons = date.getSeconds();
    let period = "AM";
    if (hors == 0) {
        hors = 12;        
    }
    else if(hors >= 12){
        hors = hors - 12;
        period = "PM";
    }
    hors = hors < 10 ? "0" + hors : hors;
    minuts = minuts < 10 ? "0" + minuts : minuts;
    secons = secons < 10 ? "0" + secons : secons;


    let time = `${hors}:${minuts}:${secons} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clocks, 1000);
    console.log(clocks);
};
clocks();