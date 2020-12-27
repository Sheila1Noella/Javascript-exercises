let first = '/';
let pushingin = [];
let whenpushed = pushingin.push(first);
console.log(whenpushed);
function commands(codes) {
    let splitingInputs = codes.split('');
    let cmd = splitingInputs[0];
    let parames = splitingInputs[1];
    switch (cmd) {
        case 'cd':
            let dire = parames.split('/');
            if (dire[0] === '..') {
                pushingin.pop();
                dire.splice(0,1);
            }
            for (let i = 0; i < dire.lenght; i++) {
                pushingin = pushingin.push(dire[i]);
            }
            break;
        case 'pwd':
            let currentdirectory = pushingin.slice();
            let currentDir = '';
            while(currentdirectory.length > 0){
                let directoryOffStack = currentdirectory.pop();
                if (directoryOffStack != '/') {
                    currentDir = directoryOffStack + '/' + currentDir;
                } else {
                    currentDir = directoryOffStack + currentDir;
                }
            }
            console.log(currentDir);
            break;
    }   
}
// commands('pwd');
commands('cd..');
console.log(pushingin);
commands('cd ff/jj/hg');