var count = 0;
document.querySelectorAll('button')[1].onclick = function (){
   count++;
   if(count==1){
     document.querySelector('section').children[0].style.left = '-100%';
    document.querySelector('section').children[1].style.left = '0%';
    document.querySelector('section').children[2].style.left = '100%';
   }else if(count==2){
     document.querySelector('section').children[0].style.left = '-200%';
    document.querySelector('section').children[1].style.left = '-100%';
    document.querySelector('section').children[2].style.left = '0%';
   }else if(count==3){
    count = 0;
     document.querySelector('section').children[0].style.left = '0%';
    document.querySelector('section').children[1].style.left = '100%';
    document.querySelector('section').children[2].style.left = '200%';
   }

}