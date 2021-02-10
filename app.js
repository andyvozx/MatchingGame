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
  document.getElementById("10").style.background = "red";
  document.getElementById("11").style.background = "red";
  document.getElementById("12").style.background = "red";
}

// total Score function

let totalScore = 0;

function AddScore() {
  totalScore++;
  document.getElementById("score").innerHTML = "Score " + "= " + totalScore;
}

function HighScore() {
  if (totalScore > 3) document.getElementById("score").style.color = "#FFD700";
}
// window.onload = function () {
//   let count = 0;
//   let pic1 = document.getElementById("1");
//   pic1.onclick = function click() {
//     if (count == 0) {
//       pic1.style.background = "url('resources/pics/andy.jpg')";
//       count = 1;
//     } else {
//       pic1.style.background = "red";
//       count = 0;
//     }
//     console.log(count);
//   };
// };

function Win() {
  Start();
  AddScore();
  HighScore();

  // makes random number for changing pic position

  function randomNum(maxLimit = 12) {
    let randomNum = Math.random() * maxLimit;
    return Math.floor(randomNum);
  }

  document.getElementById("1").style.order = randomNum();
  document.getElementById("2").style.order = randomNum();
  document.getElementById("3").style.order = randomNum();
  document.getElementById("4").style.order = randomNum();
  document.getElementById("5").style.order = randomNum();
  document.getElementById("6").style.order = randomNum();
  document.getElementById("7").style.order = randomNum();
  document.getElementById("8").style.order = randomNum();
  document.getElementById("9").style.order = randomNum();
  document.getElementById("10").style.order = randomNum();
  document.getElementById("11").style.order = randomNum();
  document.getElementById("12").style.order = randomNum();
}

// Toggle Pics

function toggle1() {
  let count = 0;
  let pic = document.getElementById("1");
  if (count === 0) {
    pic.style.background = "url('resources/pics/andy.jpg')";
    count = 1;
  } else {
    pic.style.background = "red";
    count = 0;
  }
  console.log(count);
}

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
      //Helicopter sounds
      let audio = new Audio("resources/sounds/heli.mp3");
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
