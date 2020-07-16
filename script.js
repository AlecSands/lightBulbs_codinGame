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

// Check to see if rule 1 can be run on a certain index
// function isR1Possible(ind) {
//     // Is every lightbulb after the next on off
//     let cond2 = false;
//     const secondSet = c.filter((d, i) => i > ind + 1);
//     const secondSetSum = secondSet.reduce((prev, cur) => prev + cur);
//     if (secondSetSum = 0) {
//         cond2 = true;
//     }

//     // Is the next lightbulb on
//     let cond1 = false;
//     if (c[ind+1] == 1) {
//         cond1 = true;
//     }

//     // If the conditions are met then implement rule 1
//     if (cond1 && cond2) {
//         implementRule1(ind);

//     // If the next lightbulb is on but the remaining are not off then find the first one that needs to be turned off
//     } else if (cond1 && !cond2) {


//     // If the next lightbulb is off then turn it
//     }
// }

// Start changing and checking from the right side till target index is changed
function rightInward(tarI) {
    if(c[c.length-1] == 0) {

    }
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

        // If first mismatch is last index then just call rule 2
        if (firstErr == c.length-1) {
            implementRule2();
            console.log(steps);
        } else {
            // Work from the right side in to setup to change first mismatch

        }



    }
}

doesItMatch();

// Thinking

// 00000000000000000000  -> 01000000000000000000000
// 00000000000000000001    r2
// 00000000000000000011    r1
// 00000000000000000010    r2
// 00000000000000000110    r1
// 00000000000000000111    r2
// 00000000000000000101    r1
// 00000000000000000100    r2
// 00000000000000001100    r1
// 00000000000000001101    r2
// 00000000000000001111    r1
// 00000000000000001110    r2
// 00000000000000001010    r1
// 00000000000000001011    r2
// 00000000000000001001    r1
// 00000000000000001000    r2
// 00000000000000011000    r1


// 11111111111111111111  ->  101111111111111111111
// 11111111111111111101    r1
// 11111111111111111100    r2
// 11111111111111110100    r1
// 11111111111111110101    r2
// 11111111111111110111    r1
// 11111111111111110110    r2
// 11111111111111110010    r1
// 11111111111111110011    r2
// 11111111111111110001    r1
// 11111111111111110000    r2
// 11111111111111010000    r1


// 101010101010 -> 00000000000
// 101010101011    r2
// 101010101001    r1
// 101010101000    r2
// 101010111000    r1
// 101010111001    r2
// 101010111011    r1
// 101010111010    r2
