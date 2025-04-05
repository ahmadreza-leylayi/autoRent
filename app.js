let searchBox = document.querySelector('.search-box');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav');
let container = document.querySelector('.container');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');
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

// first reserve tab 
document.addEventListener('DOMContentLoaded', function() {
    const firstReserveItems = document.querySelectorAll('.first-reserve-item');
  
    firstReserveItems.forEach(function(item) {
      item.addEventListener('click', function() {
        firstReserveItems.forEach(function(i) {
          i.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });


//   secound reserve tab 

document.addEventListener('DOMContentLoaded', function() {
    const secoundReserveItems = document.querySelectorAll('.secound-reserve-item');
  
    secoundReserveItems.forEach(function(item) {
      item.addEventListener('click', function() {
        secoundReserveItems.forEach(function(i) {
          i.classList.remove('active');
        });
        this.classList.add('active');
      });
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
          icon.src = './src/images/question/add-square.png';
        } else {
          content.classList.remove('hidden');
          icon.src = './src/images/question/minus.png';
        }
      });
    });
  });


// comment 

  document.addEventListener('DOMContentLoaded', function() {
    const commentItem = document.querySelectorAll('.comment-item');
  const commentProfile = document.querySelector('.comment-profile');
  const commentName = document.querySelector('.comment-name');
    commentItem.forEach(function(item) {
      item.addEventListener('click', function() {
        commentItem.forEach(function(i) {
          i.classList.remove('active-secondary');
        });
        this.classList.add('active-secondary');
        commentProfile.src = this.querySelector( "img").src;
        commentName.textContent = this.querySelector( "h3").textContent;
      });
    });
  });