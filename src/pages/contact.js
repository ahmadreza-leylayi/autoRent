let searchBox = document.querySelector('.search-box-contact');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-contact');
let menu = document.querySelector('.menu-contact');
let overlay = document.querySelector('.overlay-contact');
let searchInput = document.querySelector('.search-input');


// search 
document.addEventListener('DOMContentLoaded', function() {

    searchIcon.addEventListener('click', function() {
            searchBox.classList.remove('hidden');
            navBar.classList.add('hidden');
        overlay.classList.remove('hidden');
       searchInput.focus();
    });
overlay.addEventListener('click', function(e) {
    if ( e.target !== searchBox) {
        searchBox.classList.add('hidden');
        navBar.classList.remove('hidden');
        overlay.classList.add('hidden');
    } else {
        searchBox.classList.remove('hidden');
        navBar.classList.add('hidden');
    }
});


});




// comment counter 

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('comment');
    const counter = document.querySelector('.comment-counter');
    const maxLength = textarea.getAttribute('maxlength');

    // نمایش مقدار اولیه
    counter.textContent = `0/${maxLength}`;

    // آپدیت کانتر با هر تغییر در textarea
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength}/${maxLength}`;
    });
});