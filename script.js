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

// Check to see if rule 1 can be run on a certain index
function isR1Possible(ind) {
    // Is every lightbulb after the next on off
    let cond2 = false;
    const secondSet = c.filter((d, i) => i > ind + 1);
    const secondSetSum = secondSet.reduce((prev, cur) => prev + cur);
    if (secondSetSum = 0) {
        cond2 = true;
    }

    // Is the next lightbulb on
    let cond1 = false;
    if (c[ind+1] == 1) {
        cond1 = true;
    }

    // If the conditions are met then implement rule 1
    if (cond1 && cond2) {
        implementRule1(ind);

    // If the next lightbulb is on but the remaining are not off then find the first one that needs to be turned off
    } else if (cond1 && !cond2) {


    // If the next lightbulb is off then turn it
    }
}

// Run rule 1 on the current pattern
function implementRule1 (ind) {
    step++;
    swapVal(ind);
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
            // We can either run rule 1 and then move to finding the next mismatch

            // Or we need to do some prework before rule 1 can be run

        // Otherwise, if it is the last element then just change the last element value
        } else {
            implementRule2();
            doesItMatch();
        }
    }
}

doesItMatch();
