let saved = parseInt(localStorage.getItem('saved')) || 0;
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0;
let saveEl = document.getElementById("save-el")

//const countEl = document.querlySelector('span');
localStorage.setItem('saved', saved);
saveEl.textContent = saved;

function plusOne() {
    count += 1
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusTwo() {
    count += 2
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusFive() {
    count += 5
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusTen() {
    count += 10
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusTwenty() {
    count += 20
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusFifty() {
    count += 50
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusHundreed() {
    count += 100
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusTwoHundreed() {
    count += 200
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusFiveHundreed() {
    count += 500
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function plusThousand() {
    count += 1000
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusOne() {
    count -= 1
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusTwo() {
    count -= 2
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusFive() {
    count -= 5
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusTen() {
    count -= 10
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusTwenty() {
    count -= 20
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusFifty() {
    count -= 50
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusHundreed() {
    count -= 100
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusTwoHundreed() {
    count -= 200
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusFiveHundreed() {
    count -= 500
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}
function minusThousand() {
    count -= 1000
    countEl.textContent = count
    localStorage.setItem('saved', saved)
}


function save() {
    saved += count
    //count +=
	saveEl.textContent = saved
	console.log(saveEl)
	console.log(saved)
	localStorage.setItem("saved", saved);
	console.log(localStorage)
	count = 0
    countEl.textContent = count
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph  
}


