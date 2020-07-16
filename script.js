/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();
const t = readline();

let steps = 0;
let c = s;

const lastInd = cPattern.length - 1;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.error(s);
console.error(t);

// Function for finding index of first mismatch between target array and current array
function firstMismatch () {
    let i = 0;
    let mismatchFound = false;
    while (!mismatchFound) {
        if (c[i] != t[i]) {
            mismatchFound = true;
        } else {
            i++;
        }
    }
    return i;
}

// Generic function for swapping a value at a given index
function swapVal(ind) {
    if (c[ind] == 0) {
        c[ind] = 1;
    } else {
        c[ind] = 0;
    }
}


// Run rule 2 on the current pattern
function implementRule2 () {
    step++;
    swapVal(c.length-1);
}

// Function that checks if there is a match
function doesItMatch() {
    // If there is a match then return the number of steps as the answer
    if (c == t) {
        console.log(steps)

    // If it doesn't match then run some more checks and determine next step
    } else {
        // From left side what is the first index that doesn't match
        const firstErr = firstMismatch();
        console.error('first mismatch index: ' + firstErr);

        // If first mismatch isn't last element then something needs to happen
        if (firstErr != (c.length-1)) {


        // Otherwise, if it is the last element then just change the last element value
        } else {
            implementRule2();
            doesItMatch();
        }
    }
}

doesItMatch();
