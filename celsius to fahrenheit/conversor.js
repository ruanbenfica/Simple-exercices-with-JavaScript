function calculate() {
    let celsiusTemp = String(document.getElementById('temperature').value)
    let floatTemp = parseFloat(celsiusTemp.replace(",", "."))
    console.log(floatTemp)

    fahrenTemp = (floatTemp * (9 / 5) + 32).toFixed(2)

    if (isNaN(fahrenTemp)) {
        document.getElementById('result').innerHTML = "Valor informado incompatível"
    } else {
        document.getElementById('result').innerHTML = "Esse temperatura em Fahrenheit é de " + fahrenTemp + "ºF"
    }
}