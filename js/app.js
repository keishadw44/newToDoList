
const inputTag = document.querySelector('.input'); 

const form = document.getElementById('form'); 

const todoList = document.getElementById('todo'); 

const completedList = document.getElementById('completed'); 

const tasks = document.getElementsByClassName('task');

let check = document.getElementsByClassName('check')



inputTag.addEventListener('change', function(e){
    console.log('It works!');
    
    
    
    inputTag.innerHTML += e.target.innerHTML;
    
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const inputString = inputTag.value;
    
    
    if (inputString) {
        todoList.innerHTML += `<div class= "task"><input class="check" id=${inputString} type="checkbox" > ${inputString} <button id="remove"> Remove </button></div>`
        
    }

    inputTag.value = "";

    document.querySelectorAll('.check').forEach(e => addEventListener("click", (e) =>
    document.querySelectorAll('.check').forEach(element => {
    if (Boolean = true) {
        completedList.appendChild(element.parentElement)
    }
        
    })
    ))

});
 

todoList.addEventListener("change", (e) => {
    document.querySelectorAll('.check').forEach(e => addEventListener("click", (e) =>
    document.querySelectorAll('.check').forEach(element => {
    if (Boolean = true) {
        completedList.appendChild(element.parentElement)
    }
        
    })
    ))

}
)


