//Very easy
// let firstNumber = 6
// let secondNumber = 4

// console.log(firstNumber - secondNumber)
// if (firstNumber - secondNumber) {
//     console.log(`The difference between 6 - 2 is 2`);
// }



//Easy
// let firstName = 'Micah'; //5
// let secondName = `Norrington`; //10

// let micahCharacters = 5;
// let norringtonCharacters = 10;
// let longerName = (norringtonCharacters - micahCharacters);

// if(longerName) {
// console.log(`Micah's name is longer by ${longerName} characters`)
// }



//Medium
// let review = prompt(`Tell us about your experience.`)

// if (review === review.toUpperCase()) {
//     console.log(`User is shouting`)
// } else if ( review === review.toLowerCase()) {
//     console.log(`User is whispering`)
// } else {
//     console.log(`User is typing in a moderate tone :)`)
// }



//Hard
// function add(n1, n2) {
//     return n1 + n2
// } 
// function subtract(n1, n2) {
//     return n1 - n2
// }
// function divide(n1, n2) {
//     return n1 / n2
// }
// function multiply(n1, n2){
//     return n1 * n2
// }

//Very Hard
let entryPrompt = prompt(`Thank you for using my calculator. Enter a number to start your equation.`)
let opPromt = prompt('Would you like to (+, -, /, *) ?')
let finalPrompt = prompt(`Enter your final number`)

entryPrompt = Number;
finalPrompt = Number;

if (opPromt == '+' ) {
    alert(`${entryPrompt} + ${finalPrompt} = ${add(entryPrompt, finalPrompt)}` );
} 
else if(opPromt == `-`) {
    alert(`${entryPrompt} - ${finalPrompt} = ${subtract(entryPrompt, finalPrompt)}` );
}
else if (opPromt == '/') {
    alert(`${entryPrompt} / ${finalPrompt} = ${divide(entryPrompt, finalPrompt)}` );
}
else if (opPromt == '*') {
    alert(`${entryPrompt} * ${finalPrompt} = ${multiply(entryPrompt, finalPrompt)}` );
} else {
    alert('Invalid Request. Try again.')
}

function add(n1, n2) {
        return n1 + n2
    } 
    function subtract(n1, n2) {
        return n1 - n2
    }
    function divide(n1, n2) {
        return n1 / n2
    }
    function multiply(n1, n2){
        return n1 * n2
    }
    
let addition = add(entryPrompt, finalPrompt)
let subtraction = subtract(entryPrompt, finalPrompt)
let division = divide(entryPrompt, finalPrompt)
let multiplication = multiply(entryPrompt, finalPrompt)








