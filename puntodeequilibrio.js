function calcularPuntoEquilibrio() {
  const gastosFijos = parseFloat(document.getElementById("gastosFijos").value);
  const gastosIndirectos = parseFloat(document.getElementById("gastosIndirectos").value);
  const precioProducto = parseFloat(document.getElementById("precioProducto").value);
  const costounitario = parseFloat(document.getElementById("costounitario").value);

  if (isNaN(gastosFijos) || isNaN(gastosIndirectos) || isNaN(precioProducto)) {
    alert("Introduzca valores numéricos válidos para gastos fijos, gastos indirectos, costo unitario y precio del producto.");
    return;
  }

  let unidadesVendidas = 0;
  let ingresosTotales = 0;

  while (ingresosTotales < (gastosFijos+ gastosIndirectos + (costounitario*unidadesVendidas))) {
    unidadesVendidas++;
    ingresosTotales = unidadesVendidas * precioProducto;
  }

  const puntoEquilibrio = (unidadesVendidas/23);
  
  mostrarResultados(puntoEquilibrio);
}

function mostrarResultados(puntoEquilibrio) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  const parrafoEquilibrio = document.createElement("p");
  parrafoEquilibrio.textContent = `El punto de equilibrio es su negocio es de **${puntoEquilibrio}** unidades; es decir, para cubrir con todos los gastos fijos e indirectos, y empezar a ver ganacias dentro de su negocio, debe vender arriba de **${puntoEquilibrio}** productos cada día (suponiendo que trabaja 23 días sin contar los fines de semana). ¿Es una meta posible? 
  Nota: Si el punto de equilibrio es un número con decimal, toma el siguiente número, por ejemplo, si el punto de equilibrio es 2.34, toma el valor de 3.`;
  resultados.appendChild(parrafoEquilibrio);

  
}

