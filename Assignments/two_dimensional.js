var col = 10;
var rows = 10;

function drawarrays(){
    background(51);
    for (let x = 0; x < col; x++) {
        for (let y = 0; y < rows; y++) {
            var xi = x * 30;
            var yi = y * 30;
            stroke(0);
            fill(255);
            rect(xi, yi, 30, 30); 
        }

    }}
 