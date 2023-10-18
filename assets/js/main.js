;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
    div.id="preloader",
    div.className="preloader",
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div,document.body.firstChild),window.onload=function() {
    document.getElementById("preloader").classList.add("off")
};

const anchorElement = document.getElementById("anchor");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const halfWindowHeight = (window.innerHeight / 2)+200;

  if (scrollPosition > halfWindowHeight) {
    anchorElement.style.display = "block";
  } else {
    anchorElement.style.display = "none";
  }
});



// Sélectionnez le bouton et les liens vers les fichiers CSS
const changeStyleButton = document.getElementById('changeStyleButton');
const styleLink = document.getElementById('styleLink');
const initStyle = './assets/css/style.css';
styleLink.setAttribute('href', initStyle)
// Gérez le clic sur le bouton
changeStyleButton.addEventListener('click', () => {
  // Déterminez quelle feuille de style est actuellement active
  const currentStyle = styleLink.getAttribute('href');

  // Déterminez quelle feuille de style doit être activée
  const newStyle = currentStyle === './assets/css/style-light.css' ? './assets/css/style.css' : './assets/css/style-light.css';

  // Changez la feuille de style active en modifiant l'attribut href
  setTimeout(()=>{
    styleLink.setAttribute('href', newStyle);
  }, 500)
});
