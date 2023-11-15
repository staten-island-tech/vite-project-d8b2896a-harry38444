const DOMSelectors = {

    button: document.getElementById("button"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    delete: document.querySelector(`#delete`),
    form: document.querySelector("#form"),
    input3: document.querySelector(`#input3`),
        h2s: document.querySelectorAll("h2"),
        h3s: document.querySelectorAll("h3")
    };
    
    
    DOMSelectors.form.addEventListener("submit", function(event){
       event.preventDefault();
       console.log(DOMSelectors.CardName.value);
       DOMSelectors.h2s.forEach(
        (el)=> el.textContent = (DOMSelectors.CardName.value),
       )});
       const card = DOMSelectors.button.addEventListener("click", function(){
        let input= DOMSelectors.input.value;
        let input2= DOMSelectors.input2.value;
        let input3= DOMSelectors.input3.value;
        DOMSelectors.form.insertAdjacentHTML("beforeend",
        `<div class="column">
        <div class="card">
            <h2 class="card-header" id="column">${input2}</h2>
    
            <h3 class="card-info" id="column">${input}</h3>
    
            <img src = "${input3}" alt = "" class = "img">
            <button type="click" class="delete">Delete</button>
        </div>
    `);
       DOMSelectors.input.value = "";
       DOMSelectors.input2.value ="";
       DOMSelectors.input3.value ="";
       document.querySelectorAll('.delete').forEach((button) => {
        button.addEventListener('click', function(event) {
            event.target.parentElement.parentElement.remove();
            });
        });
    });