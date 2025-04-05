let searchBox = document.querySelector('.search-box-cars');
let searchIcon = document.querySelector('.search-icon');
let navBar = document.querySelector('.nav-cars');
let container = document.querySelector('.container-cars');
let menu = document.querySelector('.menu-cars');
let overlay = document.querySelector('.overlay-cars');
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


// range slider 
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const rangeMinValue = document.getElementById('range-min-value');
const rangeMaxValue = document.getElementById('range-max-value');
const sliderRange = document.getElementById('slider-range');

function formatNumber(num) {
  return new Intl.NumberFormat('fa-IR').format(num); // فرمت فارسی برای اعداد
}

function updateRange() {
    let minVal = parseInt(rangeMin.value);
    let maxVal = parseInt(rangeMax.value);
  
    // اگه مقدار حداقل از حداکثر بیشتر بود، جابجاشون کن
    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
    }
  
    rangeMinValue.textContent = formatNumber(minVal);
    rangeMaxValue.textContent = formatNumber(maxVal);
  
    const minRange = 6000000; // حداقل مقدار اسلایدر
    const maxRange = 60000000; // حداکثر مقدار اسلایدر
    const totalRange = maxRange - minRange;
    let minPercent = ((minVal - minRange) / totalRange) * 100;
    let maxPercent = ((maxVal - minRange) / totalRange) * 100;
  
    // تشخیص جهت صفحه
    const dir = document.documentElement.dir || 'rtl';
  
    if (dir === 'rtl') {
      // برای RTL: معکوس کردن درصد‌ها برای تغییر جهت
      minPercent = 100 - minPercent;
      maxPercent = 100 - maxPercent;
  
      // تنظیم left و width برای تغییر جهت کم شدن بازه‌ی آبی
      sliderRange.style.left = maxPercent + '%';
      sliderRange.style.width = (minPercent - maxPercent) + '%';
    } else {
      // برای LTR: تنظیمات معمولی
      sliderRange.style.left = minPercent + '%';
      sliderRange.style.width = (maxPercent - minPercent) + '%';
    }
  }

// وقتی اسلایدر تغییر کرد، تابع رو اجرا کن
rangeMin.addEventListener('input', updateRange);
rangeMax.addEventListener('input', updateRange);

// مقدار اولیه رو تنظیم کن
updateRange();








// sidebar dropdown menu 

// انتخاب wrapperها و بخش‌ها
const filterWrapper = document.querySelector('.filte-wrapper');
const checkboxWrapper = document.querySelector('.checkbox-wrapper');
const radioWrapper = document.querySelector('.radio-wrapper');

const filterItems = document.querySelector('.filter-items');
const checkboxItems = document.querySelector('.checkbox-items');
const radioItems = document.querySelector('.radio-items');

// تابع برای باز و بسته کردن
function toggleSection(wrapper, section) {
    wrapper.addEventListener('click', (event) => {
      // فقط وقتی روی هدر (اولین div داخل wrapper) کلیک بشه
      if (event.target.closest('.w-full.flex.items-center.justify-between.cursor-pointer')) {
        section.classList.toggle('hidden');
      }
    });
  }

// اعمال تابع به wrapperها
toggleSection(filterWrapper, filterItems);
toggleSection(checkboxWrapper, checkboxItems);
toggleSection(radioWrapper, radioItems);





