document.getElementById("calcularIMC").addEventListener("click", function () {
  var peso = parseFloat(
    prompt("ingresa tu peso en kilogramos (kg):")
  );
  var alturaCm = parseFloat(
    prompt("ingresa tu altura en centímetros (cm):")
  );

  var alturaM = alturaCm / 100;

  var imc = peso / (alturaM * alturaM);

  var resultado = document.getElementById("resultado");
  resultado.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
});
