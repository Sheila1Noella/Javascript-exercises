var starttime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timeID = 0;
function chronom() {
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var minu = diff.getMinutes(); 
    var hors = diff.getHours() - 1;
    if(minu < 10){
        minu = '0' + minu;
    } 
    if(sec < 10){
        sec = '0' + sec;
    } 
    if (msec < 100) {
        msec = '00' + msec;        
    }
    else if(msec < 100){
        msec = '0' + msec;
    }
    document.getElementById('chronotime').innerHTML = `${hors}:${minu}:${sec}:${msec}`;
    timeID = setTimeout('chronom()', 10);
}
// document.getElementById('chronotime').innerHTML = `hiiii`;
function chronomStart() {
    document.chronoForm.startstop.value ='STOP';
    document.chronoForm.startstop.onclick = chronomStop;
    document.chronoForm.reset.onclick = chronomReset;
    start = new Date();
    chronom();   
}
function chronomContinue() {
    document.chronoForm.startstop.value = 'STOP';
    document.chronoForm.startstop.onclick = chronomStop;
    document.chronoForm.reset.onclick = chronomReset;
    start = new Date() - diff;
    start = new Date(start);
    chronom();
}
function chronomReset() {
    document.getElementById('chronotime').innerHTML = '0:00:00:00';
    start = new Date();
}
function chronomStopReset() {
    document.getElementById('chronotime').innerHTML = '0:00:00:00';
    document.chronoForm.startstop.onclick = chronomStart;
}
function chronomStop() {
    document.chronoForm.startstop.value = 'START';
    document.chronoForm.startstop.onclick = chronomContinue;
    document.chronoForm.reset.onclick = chronomStopReset;
    clearTimeout(timeID);    
}
