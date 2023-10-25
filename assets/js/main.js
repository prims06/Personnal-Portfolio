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
      styleLink.setAttribute('href', getTheme())
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

//Local Storage for saving saving theme file
function setTheme(isDark){
  localStorage.setItem("fileUrl", isDark?"./assets/css/style.css":"./assets/css/style-light.css")
  return getTheme()
}
function getTheme(){
 return localStorage.getItem('fileUrl')
}





// Sélectionnez le bouton et les liens vers les fichiers CSS
const changeStyleButton = document.getElementById('changeStyleButton');
const styleLink = document.getElementById('styleLink');

// Attendez que le document soit prêt
document.addEventListener("DOMContentLoaded", function () {
  const initStyle = getTheme()==null?setTheme(true):getTheme();
  styleLink.setAttribute('href', initStyle)
});

const switchTheme=() => {
  // Déterminez quelle feuille de style est actuellement active
  const currentStyle = styleLink.getAttribute('href');

  const allElements = document.querySelectorAll('*');

  // Parcourez tous les éléments et ajoutez la classe de transition à chacun d'eux
  allElements.forEach((element) => {
    element.classList.add('transition-theme');
  });

  // Attendez un certain temps (2 secondes) pour que la transition ait lieu
  setTimeout(() => {
    // Parcourez à nouveau tous les éléments et supprimez la classe de transition
    allElements.forEach((element) => {
      element.classList.remove('transition-theme');
    });
  }, 2000); //

  // // Déterminez quelle feuille de style doit être activée
  // const newStyle = currentStyle === './assets/css/style-light.css' ? './assets/css/style.css' : './assets/css/style-light.css';

  // Changez la feuille de style active en modifiant l'attribut href
  setTimeout(()=>{
    styleLink.setAttribute('href', currentStyle === './assets/css/style-light.css'?setTheme(true):setTheme(false));
  }, 500)
}


// Gérez le clic sur le bouton
changeStyleButton.addEventListener('click', switchTheme);



