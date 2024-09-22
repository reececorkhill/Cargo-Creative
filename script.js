window.addEventListener("scroll", function() {
    
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {  // Change background when scrolled down by 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });   