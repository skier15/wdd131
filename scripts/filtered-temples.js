const hamburger = document.querySelector(".hamburger");

const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    templeName: "Tucson AZ",
    location: "Tucson, AZ, United States",
    dedicated: "2017, August, 13",
    area: 38216,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
  },
  {
    templeName: "Mesa AZ",
    location: "Mesa, AZ, United States",
    dedicated: "1927, April, 23",
    area: 75000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
  },
  {
    templeName: "Gila Valley",
    location: "Gila Valley, AZ, United States",
    dedicated: "2010, May, 23",
    area: 18561,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-gila-valley-arizona/400x250/gila-valley-temple-759378-wallpaper.jpg"
  }
];
// makeCards function
const makeCards = (templeList) => {
  const container = document.querySelector(".images-temples");
  container.innerHTML = "";
  templeList.forEach((temple) => {
    container.innerHTML += <div class="card">
      <h2>${temple.templeName}</h2>

      <p><b>Location:</b> ${temple.location}</p>
      <p><b>Dedicated:</b> ${temple.dedicated}</p>
      <p><b>Size:</b> ${temple.area}</p>

      
    </div>
  });
};

// Buttons and EventListeners
document.querySelector("#home").addEventListener('click', () => {
  document.querySelector(".images-temples").textContent = "Home"
  makeCards(temples);
})

document.querySelector("#old").addEventListener('click', () => {
  document.querySelector(".images-temples").textContent = "Old"
  const oldTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
  makeCards(oldTemples);
})

document.querySelector("#new").addEventListener('click', () => {
  document.querySelector(".images-temples").textContent = "New"
  const newTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
  makeCards(newTemples);
})

document.querySelector("#large").addEventListener('click', () => {
  document.querySelector(".images-temples").textContent = "Large"
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  makeCards(largeTemples);
})

document.querySelector("#small").addEventListener('click', () => {
  document.querySelector(".images-temples").textContent = "Small"
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  makeCards(smallTemples);
})

// initial run
makeCards(temples);
