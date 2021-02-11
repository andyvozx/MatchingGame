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
  // Hide Start button after game starts
  document.getElementById("startButton").style.display = "none";
}

// Audio

let chaching = new Audio("resources/sounds/chaching.mp3");
let heli = new Audio("resources/sounds/heli.mp3");
let laugh = new Audio("resources/sounds/laugh.mp3");

// total Score function

let totalScore = 0;

function AddScore() {
  totalScore++;
  document.getElementById("score").innerHTML = totalScore + " Miguel Captured";
  document.getElementById("score").style.color = "black";
  if (totalScore < 0) {
    let negitiveScore = totalScore * -1;
    document.getElementById("score").innerHTML =
      negitiveScore + " Miguel Escaped";
  }
}

function SubScore() {
  totalScore--;
  document.getElementById("score").innerHTML = totalScore + " Miguels Captured";
  document.getElementById("score").style.color = "red";

  if (totalScore === 0 || totalScore === 1) {
    document.getElementById("score").innerHTML =
      totalScore + " Miguel Captured";
  }
  if (totalScore < -1) {
    let negitiveScore = totalScore * -1;
    document.getElementById("score").innerHTML =
      negitiveScore + " Miguels Escaped";
  }
  if (totalScore === -1) {
    let negitiveScore = totalScore * -1;
    document.getElementById("score").innerHTML =
      negitiveScore + " Miguel Escaped";
  }
}

function HighScore() {
  if (totalScore > 1) {
    document.getElementById("score").innerHTML =
      totalScore + " Miguels Captured";
  }
  if (totalScore === 4) {
    heli.play();
  }
  if (totalScore > 3) {
    document.getElementById("score").style.color = "#FFD700";
    heli.play();
  }
}

// makes random number for changing pic position

function randomNum(maxLimit = 12) {
  let randomNum = Math.random() * maxLimit;
  return Math.floor(randomNum);
}

function Win() {
  Start();
  AddScore();
  HighScore();
  randomNum();

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

function Lose() {
  Start();
  SubScore();
  randomNum();

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
      // Winning sounds
      chaching.play();
      Win();
    }, 700);
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

// Toggle 9 to lose

function toggle9() {
  let count = 0;
  let pic = document.getElementById("9");
  if (count === 0) {
    pic.style.background = "url('resources/pics/goblin.jpg')";
    setTimeout(function () {
      // Lose sounds
      laugh.play();
      Lose();
    }, 800);
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
