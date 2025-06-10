var btn  = document.querySelector('.add-btn');

btn.onclick = function (){
    if(document.querySelector('.add-txt').value == ""){
        alert("Please Fill out add Text !!");
        return;
    }else{
        var newLi = document.createElement('li');
        newLi.innerHTML = `<span>${document.querySelector('.add-txt').value}</span>
        <div class="todo-actions">
          <button>✔</button>
          <button>✖</button>
        </div>`;
        newLi.classList.add('todo-item');
       document.querySelector('.todo-list').appendChild(newLi);
    }



    document.querySelector('.add-txt').value = "";  // allocate new Empty Value
}