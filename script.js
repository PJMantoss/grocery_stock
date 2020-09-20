//Variables
const downBtn = document.querySelector("#downBtn");
const upBtn = document.querySelector("#upBtn");
const buyListDisplay = document.querySelector("#first-list");
const fridgeListDisplay = document.querySelector("#second-list");

const buyList = ['milk','pear','cucumber','protein shake','orange'];
const fridge = [];

//fill fridge with 5 items
fridge.push('spaghetti','egg','bread','peanut','salad');

//Some items on the buyList have been bought. Move them to the fridge
let item = buyList.shift();
fridge.unshift(item);

//Move an item from the fridge to the buyList on clicking move Up btn
function moveUp(){
    let grocery = fridge.pop();
    buyList.push(grocery);
    buyListDisplay.innerHTML = buyList;
    fridgeListDisplay.innerHTML = fridge;
}

upBtn.addEventListener('click', moveUp);

//Remove last item in buyList and put it in the fridge
function moveDown(){
    let item = buyList.pop();
    fridge.unshift(item);
    buyListDisplay.innerHTML = buyList;
    fridgeListDisplay.innerHTML = fridge;
}

downBtn.addEventListener('click', moveDown);

buyListDisplay.innerHTML = buyList;
fridgeListDisplay.innerHTML = fridge;