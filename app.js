let foodArray = ["Nudeln mit Chicken", "Pizza King!", "Onigiri", "Chicken Stripes", "Miracoli Noodles", "Fertig Suppe", "Überbackene Nudeln","Käse Pizza Teig","Tiefkühl Pizza", "McDonalds","Sandwiches","Salad","Ramen"];
let random = Math.floor(Math.random() * foodArray.length);
let foodContainer = document.querySelector("#foodContainer")
let button = document.querySelector("#foodBtn");

window.addEventListener("load",()=>{
    let random = Math.floor(Math.random() * foodArray.length);
    foodContainer.innerHTML = foodArray[random];
})


button.addEventListener("click",()=>{
    let random = Math.floor(Math.random() * foodArray.length);
    foodContainer.innerHTML = foodArray[random];
})