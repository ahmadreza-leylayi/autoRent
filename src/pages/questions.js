let searchBox = document.querySelector('.search-box-questions');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-questions');
let menu = document.querySelector('.menu-questions');
let overlay = document.querySelector('.overlay-questions');
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



  // question accordionItems 

  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function(item) {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');
  
      header.addEventListener('click', function() {
        const isOpen = !content.classList.contains('hidden');
  
  
        if (isOpen) {
          content.classList.add('hidden');
          icon.src = '../images/question/add-square.png';
        } else {
          content.classList.remove('hidden');
          icon.src = '../images/question/minus.png';
        }
      });
    });
  });

