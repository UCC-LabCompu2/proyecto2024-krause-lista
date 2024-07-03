let x = 0;
const dx = 2;

/**
 * Hace que el logo tenga movimiento en el canvas.
 * @method animarLogo
 */
const animarLogo = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "Images/logo-mar-del-sur.png";
  canvas.width = canvas.width; // Limpiar el canvas

  img.onload = () => {
    ctx.drawImage(img, x, 100);
  };

  x += dx;
  if (x > canvas.width) x = 0;
};

// Llamar a animarLogo cada 50ms para animación continua
setInterval(animarLogo, 50);
