function calcularPrecioVenta() {
    const porcentajeGananciaEsperado = parseFloat(document.getElementById("porcentajeGananciaEsperado").value);
    const costoUnitario = parseFloat(document.getElementById("costoUnitario").value);
  
    if (isNaN(porcentajeGananciaEsperado) || isNaN(costoUnitario)) {
      alert("Introduzca números válidos para el porcentaje de ganancia esperado y el costo unitario.");
      return;
    }
  
    if (porcentajeGananciaEsperado < 0 || porcentajeGananciaEsperado >= 100) {
      alert("El porcentaje de ganancia esperado debe estar entre 0 y 100.");
      return;
    }
  
    if (costoUnitario <= 0) {
      alert("El costo unitario debe ser un número positivo.");
      return;
    }
  
    const margenGanancia = porcentajeGananciaEsperado / 100;
    const precioVenta = costoUnitario / (1 - margenGanancia);
  
    document.getElementById("resultadoPrecioVenta").textContent = `El precio de venta de tu producto puede ser: $${precioVenta.toFixed(2)}. Recuerde que ese margen de ganacia le ayudara a sustentar los gastos del negocio.`;
  }
  