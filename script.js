let user = [];
let comp = [];
let btnn = ["yellow", "red", "pink", "orange"];
let start = false;
let level = 0;
let text = document.querySelector('#text');

document.addEventListener("click", function () {
   if (!start) {
      console.log("Started");
      start = true;
      levelup();
   }
});

function btnFlas(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 500);
}
function levelup() {
   comp = []; 
   level++;
   text.innerText = `Level ${level}`;

   let rand = Math.floor(Math.random() * 4);
   let randColor = btnn[rand];
   let randbtn = document.querySelector(`.${randColor}`);
   
   user.push(randColor); 
   console.log("User Sequence:", user);
   
   btnFlas(randbtn); 
}
function check(idx) {
   if (user[idx] === comp[idx]) {
      console.log("Correct button");
      if (comp.length === user.length) { 
         setTimeout(levelup, 1000); 
      }
   } else {
      text.innerHTML = `Game Over: Your Score Was <b>${level}</b><br>Press any key to restart`;
      setTimeout(resetGame, 4000); 
   }
}

function btnpress() {
   if (!start) return; 
   let btn = this;
   btnFlas(btn);
   
   let color = btn.classList[1];
   comp.push(color); 
   console.log("Comp Sequence:", comp);

   check(comp.length - 1); 
}

function resetGame() {
   start = false;
   user = [];
   comp = [];
   level = 0;
   text.innerText = `Press Any Key to Start the Game!`;
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
   btn.addEventListener("click", btnpress);
}
