// Start Button Init

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

function Win() {
  Start();
  document.getElementById("container3").style.flexDirection = "row-reverse";
  let container1 = document.getElementById("container1");
  let container2 = document.getElementById("container2");
  let container3 = document.getElementById("container3");

  let items = [container1, container2, container3];
  for (let i = 0; i < items.length; i++) {
    let target = Math.floor(Math.random() * items.length - 1) + 1;
  }
}

// Toggle Pics

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
    pic.style.background = "url('resources/pics/andy.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

// toggle 7 is Win

function toggle7() {
  let count = 0;
  let pic = document.getElementById("7");
  if (count === 0) {
    pic.style.background = "url('resources/pics/miguel.jpg')";
    setTimeout(function () {
      let audio = new Audio("resources/sounds/heli.mp3");

      //Helicopter sounds

      audio.play();
      alert("You found Miguel. ICE is on the way!");
      Win();
    }, 500);
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
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

function toggle10() {
  let count = 0;
  let pic = document.getElementById("10");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}
function toggle11() {
  let count = 0;
  let pic = document.getElementById("11");
  if (count === 0) {
    pic.style.background = "url('resources/pics/andy.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}
function toggle12() {
  let count = 0;
  let pic = document.getElementById("12");
  if (count === 0) {
    pic.style.background = "url('resources/pics/alex.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}
