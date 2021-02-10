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

// let pic2 = document.getElementById("2");
// let pic3 = document.getElementById("3");
// let pic4 = document.getElementById("4");
// let pic5 = document.getElementById("5");
// let pic6 = document.getElementById("6");
// let pic7 = document.getElementById("7");
// let pic8 = document.getElementById("8");
// let pic9 = document.getElementById("9");

window.onload = function () {
  let count = 0;
  let pic1 = document.getElementById("1");
  pic1.onclick = function click() {
    if (count == 0) {
      pic1.style.background = "url('resources/pics/andy.jpg')";
      count = 1;
    } else {
      pic1.style.background = "red";
      count = 0;
    }
    console.log(count);
  };
};

// clean up

function toggle2() {
  let count = 0;
  let pic = document.getElementById("2");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle3() {
  let count = 0;
  let pic = document.getElementById("3");
  if (count === 0) {
    pic.style.background = "url('resources/pics/andy.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle4() {
  let count = 0;
  let pic = document.getElementById("4");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle5() {
  let count = 0;
  let pic = document.getElementById("5");
  if (count === 0) {
    pic.style.background = "url('resources/pics/andy.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle6() {
  let count = 0;
  let pic = document.getElementById("6");
  if (count === 0) {
    pic.style.background = "url('resources/pics/miguel.jpg')";
    setTimeout(function () {
      alert("You found Miguel. ICE is on the way!");
      Start();
    }, 500);
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle7() {
  let count = 0;
  let pic = document.getElementById("7");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle8() {
  let count = 0;
  let pic = document.getElementById("8");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle9() {
  let count = 0;
  let pic = document.getElementById("9");
  if (count === 0) {
    pic.style.background = "url('resources/pics/miguel.jpg')";
    setTimeout(function () {
      alert("You found Miguel. ICE is on the way!");
      Start();
    }, 500);
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}
