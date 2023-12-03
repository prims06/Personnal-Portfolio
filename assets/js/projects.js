

const detailsImgs = Array.from(document.querySelectorAll('.details-project-img'))
const modal = document.querySelector('.modal-bloc')
const closeModal = document.querySelector('.btn-close')
const imgContent = document.querySelector('.modal-bloc-content')
const prevBtn = document.querySelector('.btn-left')
const nextBtn = document.querySelector('.btn-right')



function getCurrentProjectList(){
  return ebookingImgs
}

function getId(src){
 return getCurrentProjectList().indexOf(src)
}
if(window.matchMedia('(min-width:700px)').matches){
  detailsImgs.forEach(img => {
    img.addEventListener('click',(e)=>{
      imgContent.setAttribute('src', e.target.getAttribute('src'))
      modal.style.display = "block"
    })
  });
prevBtn.addEventListener('click', e=>{
let id = getId(imgContent.getAttribute('src'))
let lastId = getCurrentProjectList().length -1
if(id===0){
imgContent.setAttribute('src', getCurrentProjectList()[lastId])
}else{
  imgContent.setAttribute('src', getCurrentProjectList()[id-1])
}
})

nextBtn.addEventListener('click', e=>{
  let id = getId(imgContent.getAttribute('src'))
  let lastId = getCurrentProjectList().length -1
  if(id===lastId){
  imgContent.setAttribute('src', getCurrentProjectList()[0])
  }else{
    imgContent.setAttribute('src', getCurrentProjectList()[id+1])
  }
})

closeModal.addEventListener('click', ()=>modal.style.display = "none")
}

const ebookingImgs = [
  './assets/images/projects/ebooking/1024.svg',
  './assets/images/projects/ebooking/1440.svg',
  './assets/images/projects/ebooking/Booking Info page.svg',
  './assets/images/projects/ebooking/Create new ticket 16.svg',
  './assets/images/projects/ebooking/Customer info.svg',
  './assets/images/projects/ebooking/Dashboard (1).svg',
  './assets/images/projects/ebooking/Dashboard 3.svg',
  './assets/images/projects/ebooking/Dashboard.svg',
  './assets/images/projects/ebooking/Home Page (1).svg',
  './assets/images/projects/ebooking/Home Page (2).svg',
  './assets/images/projects/ebooking/Home Page (3).svg',
  './assets/images/projects/ebooking/Home Page (4).svg',
  './assets/images/projects/ebooking/Home Page (5).svg',
  './assets/images/projects/ebooking/Home Page (6).svg',
  './assets/images/projects/ebooking/Home Page.svg',
  './assets/images/projects/ebooking/Loading 2.svg',
  './assets/images/projects/ebooking/More.svg',
  './assets/images/projects/ebooking/Seating map 2.svg',
  './assets/images/projects/ebooking/Sign In 8.svg',
  './assets/images/projects/ebooking/Trip info page 1 (1).svg',
  './assets/images/projects/ebooking/Trip info page 1.svg',
  './assets/images/projects/ebooking/Trip info page.svg',
  './assets/images/projects/ebooking/Trip planer 8.svg',
  './assets/images/projects/ebooking/WhatsApp Image 2023-06-12 at 6.10.54 PM.jpeg',
  './assets/images/projects/ebooking/WhatsApp Image 2023-06-12 at 6.10.56 PM.jpeg',
]

const galaxiImgs = [
  "./assets/images/projects/galaxi-game/pic1.png",
  "./assets/images/projects/galaxi-game/pic2.png",
  "./assets/images/projects/galaxi-game/pic3.png",
  "./assets/images/projects/galaxi-game/pic4.png",
  "./assets/images/projects/galaxi-game/pic5.png",
  "./assets/images/projects/galaxi-game/pic6.png",
  "./assets/images/projects/galaxi-game/pic7.png"
]
