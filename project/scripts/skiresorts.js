
const hamButton1 = document.querySelector("#navigation");
const navigation1 = document.querySelector(".navigation");

hamButton1.addEventListener("click", () => {
  navigation1.classList.toggle("open");
  hamButton1.classList.toggle("open");
});

