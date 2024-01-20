const header = document.getElementById("header");
const container = document.getElementById("container");
const head1 = document.getElementById("h1");
const color1 = document.getElementById("h2-c1");
const color2 = document.getElementById("h2");
const start = document.getElementById("start");
const stoper = document.getElementById("stop");
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

start.onclick = run;

function run() {
  let stp = true;
  const intervalId = setInterval(() => {
    if (stp) {
        
      stoper.addEventListener("click", () => (stp = false));
      let hex = "#";
      for (let i = 0; i < 6; i++) hex += colorFlip();

      let val = container.style.backgroundColor;
      color1.innerHTML = color2.innerHTML;
      color2.innerHTML = hex;

      header.style.backgroundColor = val;
      container.style.backgroundColor = hex;

      head1.style.color = container.style.backgroundColor;
      color1.style.color = container.style.backgroundColor;
      color2.style.color = container.style.backgroundColor;

      start.style.backgroundColor = val;
      start.style.color = container.style.backgroundColor;

      stoper.style.backgroundColor = val;
      stoper.style.color = container.style.backgroundColor;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

function colorFlip() {
  const num = Math.floor(Math.random() * 16);
  return values[num];
}
