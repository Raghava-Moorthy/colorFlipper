const header = document.getElementById("header");
const container = document.getElementById("container");
const head1 = document.getElementById("h1");
const color1 = document.getElementById("h2-c1");
const color2 = document.getElementById("h2");
const btn = document.getElementById("butn");
const colorArr = document.getElementById("colorAr");
let interval = null;
const values = "0123456789abcdef";
let colorAr = [];
btn.onclick = toggleStartStop;
btn.onmouseover = () => {
  btn.classList.remove("animation");
};
function run(msg) {
  btn.innerHTML = msg;
  if (msg === "stop" && interval === null) {
    btn.classList.add("animation");
    btn.onmouseleave = () => {
      btn.classList.add("animation");
    };
    interval = setInterval(() => {
      let hex = "#";
      for (let i = 0; i < 6; i++) hex += colorFlip();
      let val = container.style.backgroundColor;
      color1.innerHTML = color2.innerHTML;
      colorAr.push(color1.innerHTML);
      color2.innerHTML = hex;
      header.style.backgroundColor = val;
      head1.style.color = hex;
      color1.style.color = hex;
      color2.style.color = hex;
      colorArr.innerHTML = colorAr.join(", ");
      colorArr.style.color = val;
      btn.style.color = getComputedStyle(container).backgroundColor;
      container.style.backgroundColor = hex;
      btn.style.textShadow = `4px 3px 3px ${
        getComputedStyle(container).backgroundColor
      }`;
    }, 2000);
  } else {
    clearInterval(interval);
    interval = null;
    btn.classList.remove("animation");

    btn.onmouseleave = () => {
      btn.classList.remove("animation");
    };
  }
}
function toggleStartStop() {
  if (btn.innerHTML.toLowerCase() === "stop") run("start");
  else run("stop");
}
function colorFlip() {
  const num = Math.floor(Math.random() * 16);
  return values[num];
}
