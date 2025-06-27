// Write your code here!
// Remove the <main id="main"> element from the DOM
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Roy-Vincent is the champion';