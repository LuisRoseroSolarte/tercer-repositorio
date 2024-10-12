const menu = document.querySelector('.menu');
const menu1 = document.querySelector('.menu1');
console.log(menu1);
console.log(menu1);

menu.addEventListener('click',()=>{
    menu1.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    //console.log(e.target)
    if(menu1.classList.contains('spread') && e.target != menu1 && e.target != menu)
    {
        menu1.classList.toggle("spread")  
    }
})


$(document).ready(function(){

    function showPublicidad(){
        $('.publicidad').addClass('show');

    }
    setTimeout(showPublicidad,3000)

});

