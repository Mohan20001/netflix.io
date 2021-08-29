var a=document.querySelector('#a');
var clicked=0;

function show(x) {
    var y=document.querySelector(x);
    //var ex=document.querySelector(z);
    if (clicked==0) {    
       y.style.display="block";
       a.innerHTML='<i class="fas fa-minus"></i>';
     //  ex.innerHTML="-";
        clicked=1;
    } else {
        y.style.display="none"; 
        a.inn
       // ex.innerHTML="x";
        clicked=0;
    }
}

