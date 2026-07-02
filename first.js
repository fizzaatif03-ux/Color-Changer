const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button)
{
console.log(buttons);
button.addEventListener('click', function(e){
    console.log(e);
    
    console.log(e.target);
    if(e.target === grey){
        body.style.backgroundColor = 'grey';
    }
    else if(e.target === white){
        body.style.backgroundColor = 'white';
    }
     else if(e.target === blue){
        body.style.backgroundColor = 'blue';
    }
     else if(e.target === yellow){
        body.style.backgroundColor = 'yellow';
    }
    

});


});
