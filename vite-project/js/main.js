import "../style.css";
import {pets} from "./animals";

const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    themeBtn: document.querySelector('.theme-btn'),
    carnivoreBtn: document.querySelector('.Carnivore'),
    herbivoreBtn: document.querySelector('.Herbivore'),
    omnivoreBtn: document.querySelector('.Omnivore')
}

function clearfields(){
    DOMSelectors.column.innerHTML="";
}

function insertCards(arr){
    arr.forEach((pets) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${pets.name}</h3>
                <img src="${pets.img}" class="img">
                <h4>Price: ${pets.price}</h4> 
            </div>`
        )
    });
}

let initialPets = pets.filter((pets) => pets.type === 'Carnivore');
insertCards(initialPets);

DOMSelectors.carnivoreBtn.addEventListener('click', function() {
    let newArr = pets.filter((pet) => pet.type === 'Carnivore');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.herbivoreBtn.addEventListener('click', function() {
    let newArr = pets.filter((pet) => pet.type === 'Herbivore');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.omnivoreBtn.addEventListener('click', function() {
    let newArr = pets.filter((pet) => pet.type === 'Omnivore');
    clearfields();
    insertCards(newArr);
});

document.querySelector(".theme-btn").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });