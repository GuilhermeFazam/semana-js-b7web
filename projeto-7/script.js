document.querySelector(".neutralArea").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  console.log("dragstart");

  e.currentTarget.classList.add("dragging");
}
function dragEnd(e) {
  console.log("dragend");
  e.currentTarget.classList.remove("dragging");
}
