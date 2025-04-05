let searchBox = document.querySelector('.search-box-about-us');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-about-us');
let menu = document.querySelector('.menu-about-us');
let overlay = document.querySelector('.overlay-about-us');
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
