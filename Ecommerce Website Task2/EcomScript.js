const bar =document.getElementById('bar');
const nav =document.getElementById('r-navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
}