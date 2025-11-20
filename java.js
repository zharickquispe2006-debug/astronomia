function clasificarBrillo() {
  let magnitud = parseFloat(prompt("Ingrese magnitud aparente:"));
  let resultado = "";

  if (magnitud <= -1) resultado = "Extremadamente brillante (visible incluso de día)";
  else if (magnitud <= 1) resultado = "Muy brillante";
  else if (magnitud <= 3) resultado = "Brillante";
  else if (magnitud <= 6) resultado = "Débil (requiere cielo oscuro)";
  else resultado = "No visible a simple vista";

  document.getElementById("resultadoBrillo").innerText = resultado;
}

function promedioDistancias() {
  let n = parseInt(prompt("¿Cuántos planetas registrarás?"));
  let suma = 0;
  let maxDistancia = 0;

  for (let i = 1; i <= n; i++) {
    let distancia = parseFloat(prompt("Distancia planeta " + i + " (millones km):"));
    suma += distancia;
    if (distancia > maxDistancia) maxDistancia = distancia;
  }

  let promedio = suma / n;
  document.getElementById("resultadoDistancias").innerText =
    "Promedio: " + promedio + " millones km. Planeta más lejano: " + maxDistancia + " millones km.";
}

function contarCraters() {
  let diametro;
  let contador = 0;
  let maxDiametro = 0;

  while (true) {
    diametro = parseFloat(prompt("Ingrese diámetro (0 para terminar):"));
    if (diametro === 0) break;
    if (diametro > 50) contador++;
    if (diametro > maxDiametro) maxDiametro = diametro;
  }

  document.getElementById("resultadoCraters").innerText =
    "Cráteres > 50 km: " + contador + ". Diámetro máximo registrado: " + maxDiametro + " km.";
}

function identificarCuerpo() {
  let codigo = parseInt(prompt("Ingrese código (1-5):"));
  let cuerpo;
  let descripcion;

  switch (codigo) {
    case 1: cuerpo = "Estrella"; descripcion = "Esfera de plasma que emite luz propia."; break;
    case 2: cuerpo = "Planeta"; descripcion = "Objeto que orbita una estrella."; break;
    case 3: cuerpo = "Cometa"; descripcion = "Cuerpo helado que desarrolla cola al acercarse al Sol."; break;
    case 4: cuerpo = "Asteroide"; descripcion = "Roca espacial de tamaño variable."; break;
    case 5: cuerpo = "Galaxia"; descripcion = "Conjunto masivo de estrellas y sistemas."; break;
    default: cuerpo = "Código inválido"; descripcion = "";
  }

  document.getElementById("resultadoCuerpo").innerText = cuerpo + " - " + descripcion;
}

function registrarLuz() {
  let historial = [];
  let valor;

  do {
    valor = prompt("Ingrese nivel de luz (lux) o 'no' para terminar:");
    if (!valor || valor.toLowerCase() === "no") break;

    let lux = parseFloat(valor);
    let mensaje = lux < 5 ? "Noche profunda" : "Nivel aceptable";
    historial.push(lux + " lux → " + mensaje);

    document.getElementById("resultadoLuz").innerText = historial.join("\n");
  } while (true);
}
