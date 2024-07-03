window.onload = () => {
  const params = new URLSearchParams(window.location.search);

  const nombre = params.get("nombre");
  const apellido = params.get("apellido");
  const sexo = params.get("sexo");
  const fechaNacimiento = params.get("fechaNacimiento");
  const dni = params.get("dni");
  const telefono = params.get("telefono");
  const email = params.get("email");
  const fechaEntrada = params.get("fechaEntrada");
  const fechaSalida = params.get("fechaSalida");
  const adultos = params.get("adultos");
  const niños = params.get("niños");
  const totalPrecio = params.get("totalPrecio");
  const consultas = params.get("consultas");

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Estilo del ticket
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  ctx.fillStyle = "#000000";
  ctx.font = "16px Arial";
  const lineHeight = 30;
  let y = 40;

  // Añadir detalles de la reserva
  ctx.fillText("Ticket de Reserva", 20, y);
  y += lineHeight;
  ctx.fillText(`Nombre: ${nombre}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Apellido: ${apellido}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Sexo: ${sexo}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Fecha de Nacimiento: ${fechaNacimiento}`, 20, y);
  y += lineHeight;
  ctx.fillText(`DNI: ${dni}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Teléfono: ${telefono}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Email: ${email}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Fecha de Entrada: ${fechaEntrada}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Fecha de Salida: ${fechaSalida}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Adultos: ${adultos}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Niños: ${niños}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Precio Total: ${totalPrecio}`, 20, y);
  y += lineHeight;
  ctx.fillText(`Consultas: ${consultas}`, 20, y);
};
