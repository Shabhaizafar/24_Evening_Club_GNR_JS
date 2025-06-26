document.querySelector('.add').onclick = function (){
    var li = document.createElement('li');
    li.classList.add('todo-item');
    // console.log(document.querySelector('input').value);
    // console.log(`<div class="todo-text">${document.querySelector('input').value}</div>
    //             <div class="btn-group">
    //                 <button class="btn-done">Done</button>
    //                 <button class="btn-edit">Edit</button>
    //                 <button class="btn-remove">Remove</button>
    //             </div>`);
    li.innerHTML = `<div class="todo-text">${document.querySelector('input').value}</div>
                 <div class="btn-group">
                   <button class="btn-done">Done</button>
                   <button class="btn-edit">Edit</button>
                   <button class="btn-remove">Remove</button>
               </div>`;
    document.querySelector('ul').appendChild(li);
}