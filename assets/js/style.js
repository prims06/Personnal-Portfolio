const styleLink = document.getElementById('styleLink');
const fileUrl = localStorage.getItem('fileUrl');
const defaultUrl = './assets/css/style.css';
const changeStyleButton = document.getElementById('changeStyleButton');




if(!fileUrl || !fileUrl.includes('.css')){
  localStorage.setItem('fileUrl', defaultUrl);
  styleLink.setAttribute('href', defaultUrl);
}else{
  styleLink.setAttribute('href', fileUrl);
}


//Local Storage for saving saving theme file
function setTheme(isDark){
  localStorage.setItem("fileUrl", isDark?"./assets/css/style.css":"./assets/css/style-light.css")
  return getTheme()
}
function getTheme(){
 return localStorage.getItem('fileUrl')
}


function switchTheme(){
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

  setTimeout(()=>{
    styleLink.setAttribute('href', currentStyle === './assets/css/style.css'?setTheme(false):setTheme(true));
  }, 500)
}

changeStyleButton.addEventListener('click', switchTheme);
