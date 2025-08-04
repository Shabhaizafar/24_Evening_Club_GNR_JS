// How To Attech Worker in this Code !!!

// var myworker = new Worker('worker.js');
// var myworker = new  Worker('worker2.js');

var myworker;
document.querySelector('button').onclick = function(){
    if(typeof myworker != 'undefined'){
        console.log("Worker Assign!!");
    }
    else{
        myworker = new Worker("worker.js");
    }
}