const header = document.getElementById("header");
const container = document.getElementById("container");
const head1 = document.getElementById("h1");
const color1 = document.getElementById("h2-c1");
const color2 = document.getElementById("h2");
const btn = document.getElementById("butn");
let interval = null;
const values = "0123456789abcdef";
btn.onclick = toggleStartStop;
btn.onmouseover = () => {
  btn.classList.remove("animation");
};
function run(msg) {
  btn.innerText = msg;
  if (msg === "stop" && interval === null) {
    btn.onmouseleave = () => {
      btn.classList.add("animation");
    };
    interval = setInterval(() => {
      let hex = "#";
      for (let i = 0; i < 6; i++) hex += colorFlip();

      let val = container.style.backgroundColor;
      color1.innerText = color2.innerText;
      color2.innerText = hex;
      header.style.backgroundColor = val;
      container.style.backgroundColor = hex;
      head1.style.color = getComputedStyle(container).backgroundColor;
      color1.style.color = getComputedStyle(container).backgroundColor;
      color2.style.color = getComputedStyle(container).backgroundColor;
      btn.style.color = getComputedStyle(container).backgroundColor;
      btn.style.textShadow = `4px 3px 3px ${
        getComputedStyle(container).backgroundColor
      }`;
    }, 2000);
  } else {
    clearInterval(interval);
    interval = null;
    btn.onmouseleave = () => {
      btn.classList.remove("animation");
    };
  }
}
function toggleStartStop() {
  if (btn.innerText.toLowerCase() === "stop") run("start");
  else run("stop");
}
function colorFlip() {
  const num = Math.floor(Math.random() * 16);
  return values[num];
}
