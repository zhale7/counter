// Dom elements
const counter = document.querySelector("#counter");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
// Count variable
let count = 0;
// Events for buttons
    increaseBtn.onclick = function () {
      count += 1;
      counter.innerHTML = count;
      // console.log(count);
      addColor();
};
    resetBtn.onclick = function () {
      count = 0;
      counter.innerHTML = count;
      // console.log(count);
      addColor();
};
    decreaseBtn.onclick = function () {
      count -= 1;
      counter.innerHTML = count;
      // console.log(count);
      addColor();
};
// Function compares the value of count variable, and changes the color appropriately.
function addColor() {
     if (count > 0) {
       counter.style.color = "green";
     } else if (count < 0) {
       counter.style.color = "red";
     } else {
       counter.style.color = "black";
     }
}

