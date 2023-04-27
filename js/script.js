let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
  
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

  };

var dark = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/moon.png";
    }
    else{
        icon.src = "images/sun.png";
    }

}



var typed = new Typed('.multiply-text', {
    strings: ["أ/ أحمد السيد شعبان"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
  });




