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