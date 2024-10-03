const mainButton = document.getElementById("show-main-btn");
const secondaryButton = document.getElementById("show-secondary-btn");
const header = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const headerSubtitle = document.getElementById("header-subtitle");
const headerTagline = document.getElementById("header-tagline");
const headerh2 = document.getElementById("header-h2");

window.addEventListener("scroll", function() {
    
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
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

  header.style.backgroundImage = 'linear-gradient(to left, rgba(255, 255, 255, 0.025), rgba(0, 0, 59, 0.695)), url("/assets/1106129fd572fda500f591c40b284e6f")';
  headerTitle.textContent = "Main Header";
  headerTitle.style.fontSize = "142px";
  headerSubtitle.textContent = "This is our";
  headerTagline.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque fermentum libero velit, sit amet suscipit mauris elementum id. Praesent interdum a ante ut dapibus.";
  headerh2.innerHTML = 'Find out more<i class="fa-sharp fa-solid fa-circle-arrow-right fa-2xl" id="find-out-arrow"></i>';

});

secondaryButton.addEventListener("click", function() {

  const mainBtn = document.getElementById("show-main-btn");
  const secondaryBtn = document.getElementById("show-secondary-btn");

  mainBtn.classList.remove('selected');
  mainBtn.classList.add('not-selected');
  secondaryBtn.classList.remove('not-selected');
  secondaryBtn.classList.add('selected');

  header.style.backgroundImage = 'linear-gradient(to left, rgba(255, 255, 255, 0.025), rgba(0, 0, 59, 0.695)), url("/assets/brooke-cagle-NoRsyXm.png")';
  headerTitle.textContent = "Secondary Header";
  headerTitle.style.fontSize = "118px";
  headerSubtitle.textContent = "And this is a";
  headerTagline.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque fermentum libero velit, sit amet suscipit mauris elementum id. Praesent interdum a ante ut dapibus.";
  headerh2.innerHTML = 'Find out more<i class="fa-sharp fa-solid fa-circle-arrow-right fa-2xl" id="find-out-arrow"></i>';

});