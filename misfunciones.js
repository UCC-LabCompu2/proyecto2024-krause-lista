const enviarFormulario = () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const fechaNacimiento = document.getElementById("fecha_de_nacimiento").value;
  const dni = document.getElementById("dni").value;
  const telefono = document.getElementById("numero_de_telefono").value;
  const email = document.getElementById("email").value;
  const fechaEntrada = document.getElementById("fecha_de_entrada").value;
  const fechaSalida = document.getElementById("fecha_de_salida").value;
  const adultos = document.getElementById("adultos").value;
  const niños = document.getElementById("niños").value;
  const consultas = document.getElementById("consultas").value;

  const fechaEntradaDate = new Date(fechaEntrada);
  const fechaSalidaDate = new Date(fechaSalida);
  const noches = (fechaSalidaDate - fechaEntradaDate) / (1000 * 60 * 60 * 24);

  if (isNaN(noches) || noches <= 0) {
    alert("Por favor, ingresa fechas válidas.");
    return false;
  }

  const totalPrecio = (adultos * 70000 + niños * 50000) * noches;

  const parametros = new URLSearchParams({
    nombre,
    apellido,
    sexo,
    fechaNacimiento,
    dni,
    telefono,
    email,
    fechaEntrada,
    fechaSalida,
    adultos,
    niños,
    totalPrecio,
    consultas,
  });

  window.location.href = `resumen.html?${parametros.toString()}`;
  return false;
};
