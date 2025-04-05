let searchBox = document.querySelector('.search-box-rules');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-rules');
let menu = document.querySelector('.menu-rules');
let overlay = document.querySelector('.overlay-rules');
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
