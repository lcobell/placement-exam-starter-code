// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Logan CoBell" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Ginger Bread cookies
let qtyGb = document.querySelector('.qty-gb');
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('ginger bread + was clicked')
    
    
        gb += 1;
        document.getElementById('qty-gb').innerHTML = gb;

        console.log(gb)
})
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked


document.getElementById('minus-gb').addEventListener('click', function(){
    console.log('Ginger bread - button was clicked!')
    while ( gb > 0 ){
        gb -= 1;
        document.getElementById('qty-gb').innerHTML = gb;}
    
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')

    cc += 1;
        document.getElementById('qty-cc').innerHTML = cc;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
    while ( cc >= 0 ){
        cc -= 0;
        document.getElementById('qty-cc').innerHTML = cc;}
})

document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')
    sugar += 1;
        document.getElementById('qty-sugar').innerHTML = sugar;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle - button was clicked!')
    while ( sugar > 0 ){
        sugar -= 1;
        document.getElementById('qty-sugar').innerHTML = sugar;}
})

