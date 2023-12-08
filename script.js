const show_modal = document.querySelectorAll('.show-modal'); 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');

const showModal = function() {
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden');
}

const removeModal = function() {
    modal.classList.add('hidden');  
    overlay.classList.add('hidden');
}

for (let i = 0; i < show_modal.length; i++) {
    show_modal[i].addEventListener('click',showModal);
}

overlay.addEventListener('click',removeModal);

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape'){
        removeModal();
    } 
});

close_modal.addEventListener('click',removeModal);
