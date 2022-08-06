
const inputTag = document.querySelector('.input'); // input field

const form = document.getElementById('form'); // form element

const todoList = document.getElementById('todo'); // todo list element

const completedList = document.getElementById('completed'); // todo list element

const tasks = document.getElementsByClassName('task');

let check = document.getElementsByClassName('check')

// const check = document.getElementsByClassName("check")


// function(e) - this function gets the 'event' (the input) and passes the data of the innerHTML to the function to be handled

inputTag.addEventListener('change', function(e){
    console.log('It works!');
    
    
    // event handler
    // update the innerHTML of the inputTag to add =+ every character entered until the last character is entered
    inputTag.innerHTML += e.target.innerHTML;
    
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from navigating away from page

    const inputString = inputTag.value;
    // console.log(inputString);
    
    // event handler
    // create a todoList and change the innerHTML to create a list of todos += `<li> ToDo ${inputString} </li>`
    // the li also needs a unique ID so you can find it later for deletion
    // todoList.innerHTML += `<li id=${inputString}> ToDo ${inputString} </li>`
    if (inputString) {
        todoList.innerHTML += `<div class= "task"><input class="check" id=${inputString} type="checkbox" > ${inputString} <button id="remove"> Remove </button></div>`
        
    }
    // clear the input text after it's handled
    inputTag.value = "";

    document.querySelectorAll('.check').forEach(e => addEventListener("click", (e) =>
    document.querySelectorAll('.check').forEach(element => {
    if (Boolean = true) {
        completedList.appendChild(element.parentElement)
    }
        // if (e.checked) {
        //  console.log('hello')
        // }

    //   completedList.innerHTML += `<div>`
    })
    ))

});
 
//This is looping too much or something. The amount of console logs increases by two each time this event happens
todoList.addEventListener("change", (e) => {
    document.querySelectorAll('.check').forEach(e => addEventListener("click", (e) =>
    document.querySelectorAll('.check').forEach(element => {
    if (Boolean = true) {
        completedList.appendChild(element.parentElement)
    }
        // if (e.checked) {
        //  console.log('hello')
        // }

    //   completedList.innerHTML += `<div>`
    })
    ))

}
)


// check.array.forEach((ears) => {
//     function ears(){addEventListener("click")}
// });

// for (var i = 0 ; i < check.length; i++) {
//     check[i].addEventListener('click') 
//     console.log(asdfghj)

//  }

// check.addEventListener("change", (check) => {
//     check.array.forEach(element => {
//         if (this.checked = true) {
//         console.log(fuck)
//     }
// });
// }
    
// )



