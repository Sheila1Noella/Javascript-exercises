
let root = '/';
let directoryVisitStack = [];
directoryVisitStack.push(root);
function solution(queries) {
    //expected command to come in as cmd {space} params
    let splitInput = queries.split(' ');
    let cmd = splitInput[0];
    let params = splitInput[1];

    switch (cmd) {
        case 'cd':
            let directories = params.split('/')
            //console.log(directories);
            if (directories[0] === '..') {
                //Go one step back
                directoryVisitStack.pop();
                directories.splice(0, 1);
            }

            for (let i = 0; i < directories.length; i++) {
                directoryVisitStack.push(directories[i]);
            }
            break;
        case 'pwd':
            //take a copy of directory tree;
            let currentDirState = directoryVisitStack.slice();
            let currentDir = '';
            while (currentDirState.length > 0) {
                let directoryOffStack = currentDirState.pop();
                if (directoryOffStack != '/') {
                    currentDir = directoryOffStack + '/' + currentDir
                } else {
                    currentDir = directoryOffStack + currentDir
                }
            }
            console.log(currentDir);
            break;
    }

}

solution('pwd');
solution('cd foo/bar');
//solution('pwd');
solution('cd ../ab/cd');
solution('pwd');

console.log(directoryVisitStack);