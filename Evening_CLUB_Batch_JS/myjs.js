const btn = document.querySelector('.form-todo .btn');
const ul = document.querySelector('ul.todo-list');
btn.onclick = function(event){
    event.preventDefault();   // stop/hold reload page/webpage
    var data = document.querySelector("#data").value;

    // How to Create a New Element Using JS : 
    var newli = document.createElement('li');
    newli.innerHTML = `<span class="text">${data}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
            <button class="todo-btn update">Update</button>
          </div>`;

    // How to add New Child Using JS : 
    ul.appendChild(newli);


    document.querySelector("#data").value = "";
}

// ---------------------------
ul.onclick = function(event){
    if(event.target.innerText == "Done"){
        event.target.parentElement.parentElement.children[0].classList.add('completed');
    }else if(event.target.innerText == "Remove"){
    event.target.parentElement.parentElement.remove();
    }else if(event.target.innerText == "Update" && !event.target.parentElement.parentElement.children[0].classList.contains('completed')){
        event.target.parentElement.parentElement.children[0].innerHTML = prompt("Enter New Value : ");
    }
}

//  