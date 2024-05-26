
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

function createOptions(array) {
  const templateOptions = array.map((item) => {
    return `<option value="${item.id}">${item.name}</option>`;
  });

  const selectElement = document.querySelector("#pro-name");
  selectElement.innerHTML += templateOptions;
}

const form = document.querySelector(".form-box");
const numVisits = document.querySelector(".visits");
let getVisits = parseInt(localStorage.getItem("reviews")) || 0;

document.addEventListener("DOMContentLoaded", function () {
  const pathname = window.location.pathname;

  if (pathname.includes("form.html")) {
    createOptions(products);
  } else if (pathname.includes("review.html")) {
    getVisits += 1;
    localStorage.setItem("reviews", getVisits);
    numVisits.textContent = getVisits;
  }
});