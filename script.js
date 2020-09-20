//Variables
const downBtn = document.querySelector("#down");
const upBtn = document.querySelector("#up");
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
    
}