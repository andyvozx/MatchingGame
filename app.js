let count = 0;
let property = document.getElementById("parent");

function Start() {
  document.getElementById("1").style.background = "red";
  document.getElementById("2").style.background = "red";
  document.getElementById("3").style.background = "red";
  document.getElementById("4").style.background = "red";
  document.getElementById("5").style.background = "red";
  document.getElementById("6").style.background = "red";
  document.getElementById("7").style.background = "red";
  document.getElementById("8").style.background = "red";
  document.getElementById("9").style.background = "red";
}

window.onload = function () {
  document.getElementById("1").onclick = function click() {
    console.log("click");
    if (count == 0) {
      document.getElementById("1").style.background =
        "url('resources/pics/miguel.jpg')";
      count = 1;
    } else {
      document.getElementById("1").style.background = "red";
      count = 0;
    }
    console.log(count);
  };
};

// 2-9
