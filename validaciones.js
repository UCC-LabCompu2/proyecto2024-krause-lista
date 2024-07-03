/**
 * Valida los datos del formulario de reserva.
 * @method validacionForma
 * @returns {boolean} False si hay algún error de validación, True en caso contrario.
 */
const validacionForma = () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const masculino = document.getElementById("masculino").checked;
  const femenino = document.getElementById("femenino").checked;
  const telefono = document.getElementById("numero_de_telefono").value;
  const email = document.getElementById("email").value;
  const adultos = document.getElementById("adultos").value;
  const niños = document.getElementById("niños").value;

  const nombreRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numeroRegex = /^[0-9]+$/;

  if (!nombre.match(nombreRegex)) {
    alert("Por favor, ingresa un nombre válido (solo letras).");
    return false;
  }
  if (!apellido.match(nombreRegex)) {
    alert("Por favor, ingresa un apellido válido (solo letras).");
    return false;
  }
  if (!masculino && !femenino) {
    alert("Por favor, selecciona un género.");
    return false;
  }
  if (!telefono.match(numeroRegex)) {
    alert("Por favor, ingresa un número de teléfono válido (solo números).");
    return false;
  }
  if (!email.match(emailRegex)) {
    alert("Por favor, ingresa un email válido.");
    return false;
  }
  if (!adultos.match(numeroRegex) || !niños.match(numeroRegex)) {
    alert("Por favor, ingresa un número válido para adultos y niños.");
    return false;
  }
  if (parseInt(adultos) > 6 || parseInt(niños) > 6) {
    alert(
      "La cantidad de adultos y niños no debe ser excesivamente grande (máximo 6)."
    );
    return false;
  }
  return true;
};

/**
 * Formatea un precio a la moneda argentina (ARS).
 * @method formatoprecio
 * @param {number} price - El precio a formatear.
 * @returns {string} El precio formateado.
 */
const formatoPrecio = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
};

/**
 * Calcula el precio total de la reserva basado en el número de adultos, niños y noches.
 * @method calcularprecios
 */
const calcularprecios = () => {
  const num1 = document.getElementById("adultos").value;
  const num2 = document.getElementById("niños").value;
  const fechaEntrada = new Date(
    document.getElementById("fecha_de_entrada").value
  );
  const fechaSalida = new Date(
    document.getElementById("fecha_de_salida").value
  );
  const noches = (fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24);

  if (isNaN(num1) || isNaN(num2) || isNaN(noches) || noches <= 0) {
    alert("Por favor, ingresa datos válidos.");
    document.getElementById("adultos").value = "";
    document.getElementById("niños").value = "";
    document.getElementById("fecha_de_entrada").value = "";
    document.getElementById("fecha_de_salida").value = "";
    document.getElementById("totalprecio").value = "";
    return;
  }

  const adultos = Number(num1);
  const niños = Number(num2);

  const totalPrecio = (adultos * 70000 + niños * 50000) * noches;

  document.getElementById("totalprecio").value = formatoPrecio(totalPrecio);
};

/**
 * Valida que el campo DNI contenga solo números.
 * @method ponerdni
 */
const ponerdni = () => {
  const dni = document.getElementById("dni").value;

  if (isNaN(dni)) {
    alert("Por favor, ingresa solo números.");
    document.getElementById("dni").value = "";
  }
};

/**
 * Valida que el campo de teléfono contenga solo números.
 * @method ponertelefono
 */
const ponertelefono = () => {
  const numero_de_telefono =
    document.getElementById("numero_de_telefono").value;

  if (isNaN(numero_de_telefono)) {
    alert("Por favor, ingresa solo números.");
    document.getElementById("numero_de_telefono").value = "";
  }
};

/**
 * Valida que los campos de nombre y apellido contengan solo letras.
 * @method validarLetras
 * @param {Event} event - El evento de entrada.
 */
const validarLetras = (event) => {
  const input = event.target;
  const nombreRegex = /^[a-zA-Z\s]*$/;
  if (!nombreRegex.test(input.value)) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
  }
};
