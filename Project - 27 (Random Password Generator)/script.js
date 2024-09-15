const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const passwordTextarea = document.getElementById("password");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

window.addEventListener("load", function () {
  var message = document.getElementById("message");
  message.classList.add("show");
  setTimeout(function () {
    message.classList.remove("show");
  }, 2500);
});

function generatePassword() {
  let textArea = document.querySelector("#password");
  textArea.value = "";
  const length = parseInt(lengthInput.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;
  
  if (!(includeLowercase || includeNumbers || includeSymbols || includeUppercase)) {
    textArea.placeolder = "At least select one of the checkboxes!";
    return;
  }
  
  
  let chars = "";
  if (includeUppercase) chars += uppercaseLetters;
  if (includeLowercase) chars += lowercaseLetters;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordTextarea.value = password;
}

function copyPassword() {
  passwordTextarea.select();
  document.execCommand("copy");
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);


//change background images
// function backgroundImages() {
//   const images = ['url("images/image1.jpg")', 'url("images/image2.jpg")', 'url("images/image3.jpg")', 'url("images/image4.jpg")', 'url("images/image5.jpg")'];
//   const randomIndex = Math.floor(Math.random() * images.length);  // No +1 here
//   console.log(images[randomIndex]);
//   document.body.style.backgroundImage = images[randomIndex];
//   // document.body.classList.toggle('fadeIn');
//   // document.body.classList.toggle('fadeOut');

// }

// setInterval(() => {
//   backgroundImages();
// }, 5000);
