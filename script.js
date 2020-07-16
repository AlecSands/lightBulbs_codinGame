/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();
const t = readline();

let steps = 0;
let cPattern = s;

const lastInd = cPattern.length - 1;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.error(s);
console.error(t);

function firstMismatch () {
    let i = 0;
    let mismatchFound = false;
    while (!mismatchFound) {
        if (cPattern[i] != t[i]) {
            mismatchFound = true;
        } else {
            i++;
        }
    }
    return i;
}

function doesItMatch() {
    if (cPattern == t) {
        console.log(steps)
    } else {
        // From left side what is the first index that doesn't match
        const firstErr = firstMismatch();
        console.error('first mismatch index: ' + firstErr);

        // If first mismatch isn't last element then
    }
}

doesItMatch();
