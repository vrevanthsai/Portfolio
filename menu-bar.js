navbar=document.querySelector('.navbar');
burger=document.querySelector('.burger');
rmenu=document.querySelector('.rmenu');
rmenu.addEventListener('click',()=>{
    navbar.classList.toggle('burger');
})