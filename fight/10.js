const player0Hp = document.querySelector(".score--0");
const player1Hp = document.querySelector(".score--1");
const player0Move = document.getElementById("player--0");
const player1Move = document.getElementById("player--1");
const atkBtn0 = document.querySelector(".atk-btn-0");
const defBtn0 = document.querySelector(".def-btn-0");
const lckBtn0 = document.querySelector(".lck-btn-0");
const atkBtn1 = document.querySelector(".atk-btn-1");
const defBtn1 = document.querySelector(".def-btn-1");
const lckBtn1 = document.querySelector(".lck-btn-1");
const sec0 = document.querySelector(".sec0");
const sec1 = document.querySelector(".sec1");
const p0 = document.querySelector(".p0");
const p1 = document.querySelector(".p1");
const round = document.querySelector('.round');
const res0 = document.querySelector('.res0');
const res1 = document.querySelector('.res1');

p1.textContent = "";
p0.textContent = "";
let player0Life = parseInt(player0Hp.textContent);
let player1Life = parseInt(player1Hp.textContent);
player0Life = 100;
player1Life = 100;
player0Hp.textContent = player0Life;
player1Hp.textContent = player1Life;
let player0Atk;
let player1Atk;
let player0def;
let player1def;
let player0lck;
let player1lck;
let roundValue = 0;
res0.textContent = '';
res1.textContent = '';

// attack
atkBtn0.addEventListener("click", () => {
    p1.textContent = '';
    p0.textContent = '';
  sec0.classList.remove("active");
  sec0.classList.add("second");
  sec1.classList.remove("second");
  sec1.classList.add("active");
  player0Atk = player0Move.textContent = Math.ceil(Math.random() * 15);
});

atkBtn1.addEventListener("click", () => {
  sec0.classList.remove("second");
  sec0.classList.add("active");
  sec1.classList.remove("active");
  sec1.classList.add("second");
  player1Atk = player1Move.textContent = Math.ceil(Math.random() * 15);

  if (player0Atk !== undefined) {
    player1Life -= player0Atk;
    p1.textContent = `- ${player0Atk}HP`;
    player0Life -= player1Atk;
    p0.textContent = `- ${player1Atk}HP`;
    player0Hp.textContent = player0Life;
    player1Hp.textContent = player1Life;
  } else if (player0def !== undefined) {
    p1.textContent = `- 0HP`;
    p0.textContent = `- 0HP`;
    player1Atk -= player0def;
    if (player1Atk > 0) {
      player0Life -= player1Atk;
      p0.textContent = `- ${player1Atk}HP`;
      player0Hp.textContent = player0Life;
    }
  } else {
    p1.textContent = `- 0HP`;
    player0Life -= player1Atk;
    p0.textContent = `- ${player1Atk}HP`;
    player0Hp.textContent = player0Life;
  }

  if (player0Life <= 0) {
    player0Hp.classList.add("death");
    player0Hp.classList.remove("score--0");
    player0Hp.textContent = player0Life + ' 😭';
    player1Hp.textContent = player1Life + ' 🏆';
    res0.textContent = 'You lose!';
    res1.textContent = 'You Win!';
  }
  if (player1Life <= 0) {
    player1Hp.classList.add("death");
    player1Hp.classList.remove("score--1");
    player1Hp.textContent = player1Life + ' 😭';
    player0Hp.textContent = player0Life + ' 🏆';
    res0.textContent = 'You Win!';
    res1.textContent = 'You lose!';
  }
  roundValue += 1;
  round.textContent = `Round: ${roundValue}`;
  player0Atk = undefined;
  player1Atk = undefined;
  player0def = undefined;
  player1def = undefined;
  player0lck = "";
  player1lck = "";
});

//defense
defBtn0.addEventListener("click", () => {
    p1.textContent = '';
    p0.textContent = '';
  sec0.classList.remove("active");
  sec0.classList.add("second");
  sec1.classList.remove("second");
  sec1.classList.add("active");
  player0def = player0Move.textContent = Math.ceil(Math.random() * 15);
});

defBtn1.addEventListener("click", () => {
  player1def = player1Move.textContent = Math.ceil(Math.random() * 15);

  if (player1def !== undefined) {
    if (player0def !== undefined) {
      alert("Your enemy already choose defense!");
      player0def = player0def;
    } else {
      sec0.classList.remove("second");
      sec0.classList.add("active");
      sec1.classList.remove("active");
      sec1.classList.add("second");
      player0Atk -= player1def;
      player0def = undefined;
      p0.textContent = `- 0HP`;
      p1.textContent = `- 0HP`;
      if (player0Atk > 0) {
        p1.textContent = `- ${player0Atk}HP`;
        player1Life -= player0Atk;
        player1Hp.textContent = player1Life;
      }
    }
  } else {
    sec0.classList.remove("second");
    sec0.classList.add("active");
    sec1.classList.remove("active");
    sec1.classList.add("second");

    player1Life -= player0Atk;
    player1Hp.textContent = player1Life;
    player0def = undefined;
  }

  if (player0Life <= 0) {
    player0Hp.classList.add("death");
    player0Hp.classList.remove("score--0");
    player0Hp.textContent = player0Life + ' 😭';
    player1Hp.textContent = player1Life + ' 🏆';
    res0.textContent = 'You lose!';
    res1.textContent = 'You Win!';
  }
  if (player1Life <= 0) {
    player1Hp.classList.add("death");
    player1Hp.classList.remove("score--1");
    player1Hp.textContent = player1Life + ' 😭';
    player0Hp.textContent = player0Life + ' 🏆';
    res0.textContent = 'You Win!';
    res1.textContent = 'You lose!';
  }

  roundValue += 1;
  round.textContent = `Round: ${roundValue}`;
  player0Atk = undefined;
  player1Atk = undefined;
  player1def = undefined;
  player0lck = "";
  player1lck = "";
});

//luck
lckBtn0.addEventListener("click", () => {
    p1.textContent = '';
    p0.textContent = '';
  sec0.classList.remove("active");
  sec0.classList.add("second");
  sec1.classList.remove("second");
  sec1.classList.add("active");
  const randomLuck = Math.ceil(Math.random() * 5);
  if (randomLuck === 1) {
    p0.textContent = `+ 15HP`;
    player0Move.textContent = "+15HP";
    player0Life += 15;
    player0Hp.textContent = player0Life;
  } else if (randomLuck === 2) {
    p0.textContent = `+ 10HP`;
    player0Move.textContent = "+10HP";
    player0Life += 10;
    player0Hp.textContent = player0Life;
  } else if (randomLuck === 3) {
    p0.textContent = `+ 5HP`;
    player0Move.textContent = "+5HP";
    player0Life += 5;
    player0Hp.textContent = player0Life;
  } else if (randomLuck === 4) {
    p0.textContent = `- 10HP`;
    player0Move.textContent = "-10HP";
    player0Life -= 10;
    player0Hp.textContent = player0Life;
  } else if (randomLuck === 5) {
    player0Move.textContent = "X";
  }

  if (player0Life <= 0) {
    player0Hp.classList.add("death");
    player0Hp.classList.remove("score--0");
    player0Hp.textContent = player0Life + '😭';
    player1Hp.textContent = player1Life + '🏆';
    res0.textContent = 'You lose!';
    res1.textContent = 'You Win!';
  }
  if (player1Life <= 0) {
    player1Hp.classList.add("death");
    player1Hp.classList.remove("score--1");
    player1Hp.textContent = player1Life + '😭';
    player0Hp.textContent = player0Life + '🏆';
    res0.textContent = 'You Win!';
    res1.textContent = 'You lose!';
  }
});

lckBtn1.addEventListener("click", () => {
  sec0.classList.remove("second");
  sec0.classList.add("active");
  sec1.classList.remove("active");
  sec1.classList.add("second");
  const randomLuck = Math.ceil(Math.random() * 5);
  console.log(randomLuck);
  if (randomLuck === 1) {
    p1.textContent = `+ 15HP`;
    player1Move.textContent = "+15HP";
    player1Life += 15;
    player1Hp.textContent = player1Life;
  } else if (randomLuck === 2) {
    p1.textContent = `+ 10HP`;
    player1Move.textContent = "+10HP";
    player1Life += 10;
    player1Hp.textContent = player1Life;
  } else if (randomLuck === 3) {
    p1.textContent = `+ 5HP`;
    player1Move.textContent = "+5HP";
    player1Life += 5;
    player1Hp.textContent = player1Life;
  } else if (randomLuck === 4) {
    p1.textContent = `- 10HP`;
    player1Move.textContent = "-10HP";
    player1Life -= 10;
    player1Hp.textContent = player1Life;
  } else if (randomLuck === 5) {
    player1Move.textContent = "X";
  }

  if (player0Atk !== undefined) {
    player1Life -= player0Atk;
    player1Hp.textContent = player1Life;
  }


  if(player0Life <= 0 && player1Life <= 0) {
    player0Hp.classList.add("death");
    player0Hp.classList.remove("score--0");
    player1Hp.classList.add("death");
    player1Hp.classList.remove("score--1");
    player0Hp.textContent = player0Life + '😭';
    player1Hp.textContent = player1Life + '😭';
    res0.textContent = "It's a draw!";
    res1.textContent = "It's a draw!";
  } else if (player0Life <= 0) {
    player0Hp.classList.add("death");
    player0Hp.classList.remove("score--0");
    player0Hp.textContent = player0Life + '😭';
    player1Hp.textContent = player1Life + '🏆';
    res0.textContent = 'You lose!';
    res1.textContent = 'You Win!';
  } else if (player1Life <= 0) {
    player1Hp.classList.add("death");
    player1Hp.classList.remove("score--1");
    player1Hp.textContent = player1Life + '😭';
    player0Hp.textContent = player0Life + '🏆';
    res0.textContent = 'You Win!';
    res1.textContent = 'You lose!';
  }

  roundValue += 1;
  round.textContent = `Round: ${roundValue}`;
  player0Atk = undefined;
  player1Atk = undefined;
  player0def = undefined;
  player1def = undefined;
  player0lck = "";
  player1lck = "";
});
