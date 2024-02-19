const detailsImgs = Array.from(
  document.querySelectorAll(".details-project-img")
);
const modal = document.querySelector(".modal-bloc");
const closeModal = document.querySelector(".btn-close");
const imgContent = document.querySelector(".modal-bloc-content");
const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");

function getCurrentProjectList() {
  console.log(document.title.split("|")[0])
  switch (document.title.split("|")[0].trimEnd()) {
    case "Ebooking":
      return ebookingImgs;
    case "Ceramic Pay":
      return ceramicImgs;
    case "Nexus":
      return nexusImgs;
    case "Manen Crypto":
      return manenImgs;
    case "The Galaxi V":
      return galaxiImgs;
    case "Itravel":
      return itravelImgs;
    default:
      return []
  }
}

function getId(src) {

  return getCurrentProjectList().indexOf(src);
}
if (window.matchMedia("(min-width:700px)").matches) {
  detailsImgs.forEach((img) => {
    img.addEventListener("click", (e) => {
      imgContent.setAttribute("src", e.target.getAttribute("src"));
      modal.style.display = "block";
    });
  });
  prevBtn.addEventListener("click", (e) => {
    let id = getId(imgContent.getAttribute("src"));
    let lastId = getCurrentProjectList().length - 1;
    if (id === 0) {
      imgContent.setAttribute("src", getCurrentProjectList()[lastId]);
    } else {
      imgContent.setAttribute("src", getCurrentProjectList()[id - 1]);
    }
  });

  nextBtn.addEventListener("click", (e) => {
    let id = getId(imgContent.getAttribute("src"));
    let lastId = getCurrentProjectList().length - 1;
    if (id === lastId) {
      imgContent.setAttribute("src", getCurrentProjectList()[0]);
    } else {
      imgContent.setAttribute("src", getCurrentProjectList()[id + 1]);
    }
  });

  closeModal.addEventListener("click", () => (modal.style.display = "none"));
}

const ebookingImgs = [
  "./assets/images/projects/ebooking/1024.svg",
  "./assets/images/projects/ebooking/1440.svg",
  "./assets/images/projects/ebooking/Booking Info page.svg",
  "./assets/images/projects/ebooking/Create new ticket 16.svg",
  "./assets/images/projects/ebooking/Customer info.svg",
  "./assets/images/projects/ebooking/Dashboard (1).svg",
  "./assets/images/projects/ebooking/Dashboard 3.svg",
  "./assets/images/projects/ebooking/Dashboard.svg",
  "./assets/images/projects/ebooking/Home Page (1).svg",
  "./assets/images/projects/ebooking/Home Page (2).svg",
  "./assets/images/projects/ebooking/Home Page (3).svg",
  "./assets/images/projects/ebooking/Home Page (4).svg",
  "./assets/images/projects/ebooking/Home Page (5).svg",
  "./assets/images/projects/ebooking/Home Page (6).svg",
  "./assets/images/projects/ebooking/Home Page.svg",
  "./assets/images/projects/ebooking/Loading 2.svg",
  "./assets/images/projects/ebooking/More.svg",
  "./assets/images/projects/ebooking/Seating map 2.svg",
  "./assets/images/projects/ebooking/Sign In 8.svg",
  "./assets/images/projects/ebooking/Trip info page 1 (1).svg",
  "./assets/images/projects/ebooking/Trip info page 1.svg",
  "./assets/images/projects/ebooking/Trip info page.svg",
  "./assets/images/projects/ebooking/Trip planer 8.svg",
  "./assets/images/projects/ebooking/WhatsApp Image 2023-06-12 at 6.10.54 PM.jpeg",
  "./assets/images/projects/ebooking/WhatsApp Image 2023-06-12 at 6.10.56 PM.jpeg",
];

const galaxiImgs = [
  "./assets/images/projects/galaxi-game/pic1.png",
  "./assets/images/projects/galaxi-game/pic2.png",
  "./assets/images/projects/galaxi-game/pic3.png",
  "./assets/images/projects/galaxi-game/pic4.png",
  "./assets/images/projects/galaxi-game/pic5.png",
  "./assets/images/projects/galaxi-game/pic6.png",
  "./assets/images/projects/galaxi-game/pic7.png",
];
const ceramicImgs = [
  "./assets/images/projects/ceramic/splash1.jpg",
  "./assets/images/projects/ceramic/splash2.jpg",
  "./assets/images/projects/ceramic/splash3.jpg",
  "./assets/images/projects/ceramic/home.jpg",
  "./assets/images/projects/ceramic/scan.jpg",
  "./assets/images/projects/ceramic/scans.jpg",
  "./assets/images/projects/ceramic/about.jpg",
  "./assets/images/projects/ceramic/setting.jpg",
  "./assets/images/projects/ceramic/sidebar.jpg",
  "./assets/images/projects/ceramic/profile.jpg",
];

const itravelImgs = [
  "./assets/images/projects/itravel/splash.jpg",
  "./assets/images/projects/itravel/login.jpg",
  "./assets/images/projects/itravel/otp1.jpg",
  "./assets/images/projects/itravel/home.jpg",
  "./assets/images/projects/itravel/more.jpg",
  "./assets/images/projects/itravel/seat-map.jpg",
  "./assets/images/projects/itravel/travel.jpg",
  "./assets/images/projects/itravel/setting-d.jpg",
  "./assets/images/projects/itravel/home-d.jpg",
  "./assets/images/projects/itravel/package-d.jpg",
  "./assets/images/projects/itravel/splash-d.jpg",
  "./assets/images/projects/itravel/seat-map-d.jpg",
  "./assets/images/projects/itravel/profile.jpg",
  "./assets/images/projects/itravel/travels-d.jpg",
];

const nexusImgs = [
  "./assets/images/projects/nexus/home.png",
  "./assets/images/projects/nexus/ads.png",
  "./assets/images/projects/nexus/ad-details.png",
  "./assets/images/projects/nexus/add-ad.png",
  "./assets/images/projects/nexus/sells.png",
  "./assets/images/projects/nexus/cats.png",
  "./assets/images/projects/nexus/login.png",
  "./assets/images/projects/nexus/contact.png",
  "./assets/images/projects/nexus/review.png",
  "./assets/images/projects/nexus/dash-home.png",
  "./assets/images/projects/nexus/dash-ads.png",
  "./assets/images/projects/nexus/profile-edit.png",
  "./assets/images/projects/nexus/chat.png",
  "./assets/images/projects/nexus/mob-home.png",
  "./assets/images/projects/nexus/mob-add-ad.png",
  "./assets/images/projects/nexus/mob-chat.png",
];
const manenImgs = []
