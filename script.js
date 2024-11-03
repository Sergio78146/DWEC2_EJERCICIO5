/**
 * Función principal para realizar el cálculo de la operación seleccionada.
 * Lee los valores de los inputs y la operación seleccionada, luego muestra el resultado.
 */
function calcular() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const operacion = document.getElementById("operacion").value;
    const resultadoDiv = document.getElementById("resultado");

    // Verificación de valores numéricos
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoDiv.textContent = "Por favor, introduce valores numéricos válidos.";
        return;
    }

    let resultado;

    // Operaciones según la selección
    switch (operacion) {
        case "suma":
            resultado = valor1 + valor2;
            break;
        case "resta":
            resultado = valor1 - valor2;
            break;
        case "multiplicacion":
            resultado = valor1 * valor2;
            break;
        case "division":
            if (valor2 === 0) {
                resultadoDiv.textContent = "Error: No se puede dividir por cero.";
                return;
            }
            resultado = valor1 / valor2;
            break;
        case "modulo":
            if (valor2 === 0) {
                resultadoDiv.textContent = "Error: No se puede calcular el módulo con divisor cero.";
                return;
            }
            resultado = valor1 % valor2;
            break;
        case "potencia":
            resultado = calcularPotencia(valor1, valor2);
            break;
        default:
            resultadoDiv.textContent = "Operación no válida.";
            return;
    }

    // Mostrar el resultado en la página
    resultadoDiv.textContent = `Resultado: ${resultado}`;
}


function calcularPotencia(base, exponente) {
    let resultado = 1;

    // Caso especial: exponente negativo
    const esExponenteNegativo = exponente < 0;
    exponente = Math.abs(exponente);

    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    // Si el exponente es negativo, devolver el inverso de la potencia
    if (esExponenteNegativo) {
        resultado = 1 / resultado;
    }

    return resultado;
}
