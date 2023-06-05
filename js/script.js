// const upper = document.getElementById("upperCase")
// const lower = document.getElementById("lowerCase")
// const number = document.getElementById("number")
// const symbol = document.getElementById("symbol")

const length = document.getElementById("length-slider")
const passwordBox = document.getElementById("passwordBox")
const lengthNumber = document.getElementById("slider-number")
const passwordAlert = "You need to check at least one box!"
const copyAlert = "Password was copied to the clipboard!"
const noPasswordAlert = "There is no password to copy!"

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
};

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

length.oninput = function () {
  lengthNumber.innerText = this.value;
}

function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;

  if (upper + lower + number + symbol === 0) {
    alert(passwordAlert)
    return;
  }
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    } 
    
  }
  passwordBox.innerHTML = password;
}
function copyPassword() {
  const textarea = document.createElement("textarea");
  const password = document.getElementById("passwordBox").innerText;
  if (!password) { return alert(noPasswordAlert) }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert(copyAlert);
}
