const toggleDisplay = document.querySelector("#toggle");
const mainEl = document.querySelector("main");
const hobbyList = document.querySelector(".slider");

if (toggleDisplay) {
  toggleDisplay.addEventListener("click", () => {
    showContent();
  });

  toggleDisplay.addEventListener("touch", () => {
    showContent();
  });
}

// on page load, remove the transition and close the main (in case of no JS)
const showContent = (param) => {
  param
    ? mainEl.classList.add("no-animation")
    : mainEl.classList.remove("no-animation");
  mainEl.classList.toggle("fold");
};

if (mainEl) {
  // toggle fold on load
  showContent(true);
}

// starts at one because forloop.index starts at 1 for some reason
let currentSlide = 1;

function changeSlide() {
  const numHobbies = hobbyList.children.length;

  // Remove the "active" class from all items
  Array.from(hobbyList.children).forEach((item) => {
    item.classList.remove("active");
  });

  // Add "active" class to the current slide
  hobbyList.children[currentSlide].classList.add("active");

  // Update currentSlide for the next interval
  currentSlide = currentSlide === numHobbies - 1 ? 0 : currentSlide + 1;
}

if (hobbyList) {
  // Start the interval
  const intervalId = setInterval(changeSlide, 3000);
}
