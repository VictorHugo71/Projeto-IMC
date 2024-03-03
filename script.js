function calcular() {
    var altura = document.getElementById('ialtura')
    var peso = document.getElementById('ipeso')
    var alt = Number(altura.value)
    var pes = Number(peso.value)

    var calc = pes / (alt * alt)
    var total = calc.toFixed(2)
    var estado


    if (total < 17) {
        estado = "Muito Abaixo do peso";
    } else if (total <= 18.49) {
        estado = "Abaixo do peso";
    } else if (total <= 24.99) {
        estado = "Peso Normal";
    } else if (total <= 29.99) {
        estado = "Acima do Peso";
    } else if (total <= 34.99) {
        estado = "Obesidade 1";
    } else if (total <= 39.99) {
        estado = "Obesidade 2 (Severa)";
    } else {
        estado = "Obesidade 3 (Mórbida)";
    }

    var res = document.getElementById('resultado')
    res.style.whiteSpace = "pre-line"
    res.innerHTML = `Seu IMC é de: ${total} \n ${estado}`
}
