const mainButton = document.getElementById("show-main-btn");
const secondaryButton = document.getElementById("show-secondary-btn");

window.addEventListener("scroll", function() {
    
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {  // Change background when scrolled down by 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

mainButton.addEventListener("click", function() {

  const mainBtn = document.getElementById("show-main-btn");
  const secondaryBtn = document.getElementById("show-secondary-btn");

  mainBtn.classList.remove('not-selected');
  mainBtn.classList.add('selected');
  secondaryBtn.classList.remove('selected');
  secondaryBtn.classList.add('not-selected');

});

secondaryButton.addEventListener("click", function() {

  const mainBtn = document.getElementById("show-main-btn");
  const secondaryBtn = document.getElementById("show-secondary-btn");

  mainBtn.classList.remove('selected');
  mainBtn.classList.add('not-selected');
  secondaryBtn.classList.remove('not-selected');
  secondaryBtn.classList.add('selected')

});