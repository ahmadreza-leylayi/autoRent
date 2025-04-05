let searchBox = document.querySelector('.search-box-blogs');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-blogs');
let menu = document.querySelector('.menu-blogs');
let overlay = document.querySelector('.overlay-blogs');
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





// hidden blog cards 

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const blogHideElements = document.querySelectorAll('.blog-hide');
    const cardWrapper = document.querySelector('.card-wrapper');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // نمایش blog-hide elements
            blogHideElements.forEach(element => {
                element.classList.remove('hidden');
            });
        
            // پنهان کردن card-wrapper
            cardWrapper.classList.add('hidden');

            // اسکرول به بالای صفحه
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});