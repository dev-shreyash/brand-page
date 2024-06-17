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

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('nav-active');
    navToggle.classList.toggle('active');
  });

  document.querySelectorAll('nav ul li a:not(:only-child)').forEach((el) => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      } else {
        document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
          dropdown.style.display = 'none';
        });
        dropdown.style.display = 'block';
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('nav-active');
      navToggle.classList.remove('active');
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