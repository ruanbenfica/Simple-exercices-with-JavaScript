function converterNota() {
    var nota = parseInt(document.getElementById('nota_aluno').value)
    var notaLetra

    if (nota > 100 || nota < 0) {
        console.log("Coloque um valor válido")
    } else if (nota >= 90 && nota <= 100) {
        notaLetra = "A"
    } else if (nota >= 80) {
        notaLetra = "B"
    } else if (nota >= 70) {
        notaLetra = "C"
    } else if (nota >= 60) {
        notaLetra = "D"
    } else {
        notaLetra = "F"
    }

    if (nota <= 100 && nota >= 0) {
        console.log("Sua nota foi " + nota + " por isso você recebeu a classificação de nota " + notaLetra)
    }
}