
// import $ from 'jquery';
// import 'slick-carousel';

// //css imports automatic

// const fs = require('fs');
// const path = require('path');

// const stylesDir = path.join(__dirname, 'assets/styles');
// const mainScssPath = path.join(stylesDir, 'main.scss');

// // Read all .scss files in the styles directory
// fs.readdir(stylesDir, (err, files) => {
//   if (err) throw err;

//   // Filter out main.scss and non-scss files
//   const scssFiles = files.filter(file => file.endsWith('.scss') && file !== 'main.scss');

//   // Generate import statements
//   const importStatements = scssFiles.map(file => `@import '${file.replace('.scss', '')}';`).join('\n');

//   // Write to main.scss
//   fs.writeFile(mainScssPath, importStatements, (err) => {
//     if (err) throw err;
//     console.log('main.scss updated successfully.');
//   });
// });

// preloader animation
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 2000); // 5000 milliseconds = 5 seconds
});

//navbar toggle

document.addEventListener('DOMContentLoaded', function () {
  const navMobile = document.querySelector('.nav-mobile');
  const navList = document.querySelector('.nav-list');

  navMobile.addEventListener('click', function () {
    navList.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navigation');
  const stickyClass = 'sticky';
  const shrinkOn = 200; 
  window.addEventListener('scroll', function() {
      if (window.scrollY > shrinkOn) {
          navbar.classList.add(stickyClass);
      } else {
          navbar.classList.remove(stickyClass);
      }
  });
});


//slider value
document.addEventListener('DOMContentLoaded', (event) => {
  const rangeSlider = document.querySelector('.range-slider-range');
  const rangeValue = document.querySelector('.range-slider-value');

  const updateValue = () => {
    rangeValue.textContent = rangeSlider.value;
  };

  updateValue();

  rangeSlider.addEventListener('input', updateValue);
});

//card hover effect
document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  const mediaQuery = window.matchMedia('(max-width: 768px)'); 

  function handleHoverEffect() {
    if (mediaQuery.matches) {
      boxes.forEach(box => box.classList.add('active-sm'));
      console.log("match");
    } else {
      boxes.forEach(box => box.classList.remove('active'));
      boxes[0].classList.add('active'); 

      boxes.forEach(box => {
        box.addEventListener('mouseover', function () {
          boxes.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  }

  handleHoverEffect();

  mediaQuery.addListener(handleHoverEffect);
});


  //slider
  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.testimonial-content .slider');
    const contents = document.querySelectorAll('.testimonial-content .content');
    const prevButton = document.querySelector('.arrow-btn .left-btn');
    const nextButton = document.querySelector('.arrow-btn .right-btn');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % contents.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + contents.length) % contents.length;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
    });

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    updateSlider();
    startAutoSlide();
});



  //faq-accordion

  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const container = document.querySelector('.faq-content').parentElement;
    const image = document.querySelector('.faq-image img'); // Correctly select the image inside .faq-image

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        button.addEventListener('click', function() {
            const content = item.querySelector('.accordion-content');
            const isActive = item.classList.contains('active');

            // Collapse all items
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = '0';
            });

            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }

            let activeHeight = 0;
            accordionItems.forEach(i => {
                if (i.classList.contains('active')) {
                    activeHeight += i.querySelector('.accordion-content').scrollHeight;
                }
            });
            
            image.style.height = `calc(600px + ${activeHeight}px)`; // Adjust the base height of the image as needed
        });
    });
});


