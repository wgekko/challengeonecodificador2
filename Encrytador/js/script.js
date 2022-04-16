
//Focus en campo de texto al iniciar.
document.getElementById("textBox").focus();

// Campo para mostrar el texto encriptado.
var resultsArea = document.getElementById("results");

var resultsTitle = document.getElementById("resultsTitle");

// Elemento div mensaje no encontrado.
var divNotFound = document.getElementById("notFound");

// Boton copiar mensaje.
var copyResultButton = document.getElementById("copyResultButton");


// Encriptador \\

const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

// validar si tiene solo letras. Devuelve true.
function checkRegEx(string) {
  return /^[a-z\s]*$/.test(string);
}

function checkEncryptText() {
  // Obtiene el valor del texto ingresado.
  const textBox = document.getElementById("textBox").value;

  if (textBox.trim() === "") {
    divNotFound.style.display = "flex";
    resultsArea.style.display = "none";
    copyResultButton.style.display = "none";
    alert("El texto debe contener al menos una letra");
    return false;
  }
  if (!checkRegEx(textBox)) {
    divNotFound.style.display = "flex";
    resultsArea.style.display = "none";
    copyResultButton.style.display = "none";
    alert("El texto debe contener solo letras minúsculas sin acentos");
    return false;
  } else {
    return true;
  }
}


function encryptTextv2() {
  if (!checkEncryptText()) {
    return false;
  }

  const text = document.getElementById("textBox").value;
  var textBoxElement = document.getElementById("textBox");
  var textEncrypted = text;

  textEncrypted = textEncrypted.replace(/e/gi, letraE);
  textEncrypted = textEncrypted.replace(/i/gi, letraI);
  textEncrypted = textEncrypted.replace(/a/gi, letraA);
  textEncrypted = textEncrypted.replace(/o/gi, letraO);
  textEncrypted = textEncrypted.replace(/u/gi, letraU);

  textBoxElement.value = "";
  document.getElementById("notFound").style.display = "none";
  resultsArea.style.display = "block";
  resultsTitle.innerHTML = "Texto encriptado:";
  resultsArea.innerHTML = textEncrypted;
  copyResultButton.style.display = "block";
}

function decryptText() {
  if (!checkEncryptText()) {
    return false;
  }

  const text = document.getElementById("textBox").value;
  var textBoxElement = document.getElementById("textBox");
  var textDecrypted = text;

  textDecrypted = textDecrypted.replace(/enter/gi, "e");
  textDecrypted = textDecrypted.replace(/imes/gi, "i");
  textDecrypted = textDecrypted.replace(/ai/gi, "a");
  textDecrypted = textDecrypted.replace(/ober/gi, "o");
  textDecrypted = textDecrypted.replace(/ufat/gi, "u");

  textBoxElement.value = "";
  document.getElementById("notFound").style.display = "none";
  resultsArea.style.display = "block";
  resultsTitle.innerHTML = "Texto desencriptado:";
  resultsArea.innerHTML = textDecrypted;
  copyResultButton.style.display = "block";
  
}

function copyText() {
  var text = document.getElementById("results");
  text.select();
  navigator.clipboard.writeText(text.innerHTML);
}


