let div = document.getElementById("div1");

let p = document.createElement("p");
p.textContent = "pirmas tagas";

let h1 = document.createElement("h1");
h1.textContent = "Antras tagas";

let h2 = document.createElement("h2");
h2.textContent = "Trecias tagas";

let h3 = document.createElement("h3");
h3.textContent = "Ketvirtas tagas";

let h4 = document.createElement("h4");
h4.textContent = "Penktas tagas";

div.appendChild(p);
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(h4);

h1.setAttribute("id", "pirmas");
h2.setAttribute("class", "antras");

let pirmas = document.getElementById("pirmas");
let antras = document.querySelector(".antras");
let trecias = document.querySelector("p");

pirmas.style.color = "orange";
antras.style.color = "blue";
trecias.style.color = "brown";

// button.addEventListener("click", ()=>{
//     let colorDiv = Array.from(document.getElementsByClassName("colorDiv"))
//     let randomColor = `rgb(${random(0,255)} ${random(0,255)} ${random(0,255)})`

//     colorDiv[random(0,6)].style.backgroundColor = randomColor
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// div2.style.height = "50px";
// div2.style.width = "50px";

// btn.addEventListener("click", () => {
//   let colorDiv = Array.from(document.getElementById("div2"));
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   colorDiv[random(6)].style.backgroundColor = rndCol;
// });

// Function declaration for createTable
function createTable() {
  let table = document.getElementById("table");
  let row = document.getElementById("row");
  let col = document.getElementById("col");
  let button = document.getElementById("submit");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let row_val = row.value;
    let col_val = col.value;

    let form = document.querySelector("form");
    form.reset();
    table.innerHTML = "";

    for (let i = 0; i < parseInt(row_val); i++) {
      let x = table.insertRow(i);
      for (let j = 0; j < parseInt(col_val); j++) {
        let y = x.insertCell(j);
        y.textContent = "c " + parseInt(j + 1) + "|";
      }
    }
  });
}

let button = document.getElementById("submit");

button.onclick = createTable();
table.style.border = "solid";

let heart = document.getElementsByClassName("heart");

let clicked = new Array(heart.length).fill(false);
console.log(clicked);

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", (event) => {
    event.preventDefault();
    if (clicked[i] == false) {
      heart[i].style.color = "red";
      clicked[i] = true;
      localStorage.setItem(`picture ${i + 1}`, `${i + 1}`);
    } else {
      heart[i].style.color = "black";
      clicked[i] = false;
      localStorage.removeItem(`picture ${i + 1}`);
    }
  });
}
