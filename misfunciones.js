// misfunciones.js
let x = 0;
const dx = 2;

function animarLogo() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  canvas.width = canvas.width; // Limpiar el canvas

  var img = new Image();
  img.src = "Images/logo-mar-del-sur.png";

  img.onload = function () {
    ctx.drawImage(img, x, 100);
  };

  x += dx;
  if (x > canvas.width) x = 0;
}

/**
 * Calcula el precio segun cantidad de adultos y niños, ademas de blanquear y alertar el ingreso de un caracter incorrecto.
 * @method calcularprecios
 * @param {string} adultos - Numero de adultos ingresados.
 * @param {string} niños - Numero de niños ingresados.
 * @return {number} El precio total calculado.
 */
var calcularprecios = () => {
  var num1 = document.getElementById("adultos").value;
  var num2 = document.getElementById("niños").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa solo números.");
    document.getElementById("adultos").value = "";
    document.getElementById("niños").value = "";
    document.getElementById("preciototal").value = "";
  }
  if (num1 < 0 || num2 < 0) {
    alert("Por favor, ingresa solo números positivos.");
    document.getElementById("adultos").value = "";
    document.getElementById("niños").value = "";
    document.getElementById("preciototal").value = "";
  }

  let adultos = Number(num1);
  let niños = Number(num2);

  let totalPrecio = adultos * 70000 + niños * 50000;

  document.getElementById("totalprecio").value = "$" + totalPrecio;
};
/**
 * Alerta y blanquea en caso de un dato mal ingresado en el campo de dni.
 * @method ponerdni
 * @param {string} dni - El valor del dni ingresado.
 * @return
 */
let ponerdni = () => {
  var dni = document.getElementById("dni").value;

  if (isNaN(dni)) {
    alert("Por favor, ingresa solo números.");
    document.getElementById("dni").value = "";
  }
};
/**
 * Alerta y blanquea en caso de un dato mal ingresado en el campo de numero de telefono.
 * @method ponertelefono
 * @param {string} numero_de_telefono - El numero de telefono ingresado.
 * @return
 */
let ponertelefono = () => {
  var numero_de_telefono = document.getElementById("numero_de_telefono").value;

  if (isNaN(numero_de_telefono)) {
    alert("Por favor, ingresa solo números.");
    document.getElementById("numero_de_telefono").value = "";
  }
};
