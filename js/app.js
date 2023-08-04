const togglebtn=document.querySelector('#toggledark');
const html1=document.querySelector('.dark');
const body = document.querySelector('body');


togglebtn.addEventListener("click", function(){
    togglebtn.classList.toggle('fa-moon-o');
    body.classList.toggle('dark');
    

});

const yumburger=document.querySelector('#shownav');
const nav=document.querySelector('#nav-items');

yumburger.addEventListener('click', () => {
    yumburger.classList.toggle('open');
    nav.classList.toggle('show');
    nav.classList.toggle('hidden');
    console.log('show nav');
    
})