let keys = document.querySelectorAll(".keys");
let spaceKey = document.querySelector(".space_key");
let tabKey = document.querySelector(".tab_key");
let shift_left = document.querySelector(".shift_left");
let shift_right = document.querySelector(".shift_right");
let alt_left = document.querySelector(".alt_left");
let ctrl_right = document.querySelector(".ctrl_right");
let ctrl_left = document.querySelector(".ctrl_left");
let caps_lock_key = document.querySelector(".caps_lock_key");
let toggle_circle = document.querySelector(".toggle_circle");
let night_mode = document.querySelector(".night_mode");
let body = document.querySelector("body");
let keyboard_wrapp = document.querySelector(".keyboard_wrapp");
let text_input = document.querySelector(".text");
let change_color = document.querySelector(".change_light_color");
let colors_input = document.querySelector(".colors_input");
let keyboard_lights = document.querySelector(".keyboard_lights");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", function (e) {
  console.log(e.code);
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.code == "Tab") {
      tabKey.classList.add("active");
    }
    if (e.code == "ShiftLeft") {
      shift_left.classList.add("active");
    }
    if (e.code == "ShiftRight") {
      shift_right.classList.add("active");
    }
    if (e.code == "CapsLock") {
      caps_lock_key.classList.toggle("active");
    }
    if (e.code == "ControlLeft") {
      ctrl_left.classList.add("active");
    }
    if (e.code == "AltLeft") {
      alt_left.classList.add("active");
    }
  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.remove("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
    }
    if (e.code == "Tab") {
      tabKey.classList.remove("active");
    }
    if (e.code == "ShiftLeft") {
      shift_left.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      shift_right.classList.remove("active");
    }
    if (e.code == "ControlLeft") {
      ctrl_left.classList.remove("active");
    }
    if (e.code == "AltLeft") {
      alt_left.classList.remove("active");
    }

    setTimeout(() => {
      keys[i].classList.remove("remove");
    });
  }
});

night_mode.addEventListener("click", function () {
  toggle_circle.classList.toggle("active");
  body.classList.toggle("active");
  night_mode.classList.toggle("active");
  keyboard_wrapp.classList.toggle("active");
  text_input.classList.toggle("active");
  change_color.classList.toggle("active");
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle("keys_night");
  }
});

colors_input.addEventListener("input", function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = colors_input.value;
  }

  keyboard_lights.style.background = colors_input.value;
});
