let image = document.getElementsByClassName("flex-item");

function changeImage() {
  if (image.getAttribute("src") == "circleRed.png") {
    image.src = "circleBlue.png";
  } else {
    image.src = "circleRed.png";
  }
}
