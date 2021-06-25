// Exercício da rockseat de JS para simular um caixa familiar.

let caixa1 = {

    incomes: [100, 1000],
    expenses: [100, 100],

}

function calcular() {
    let totalIncome = 0
    let totalexpenses = 0
    let mensage;
    for (let i = 0; i < caixa1.incomes.length; i++) {
        totalIncome += caixa1.incomes[i]

    }
    for (let i = 0; i < caixa1.expenses.length; i++) {
        totalexpenses += caixa1.expenses[i]

    }

    let finalBalance = (totalIncome - totalexpenses).toFixed(2).replace(".", ",")

    if (finalBalance < 0) {
        mensage = "Your finances isn't okay. You are negative because your balance is $" + finalBalance + "."
        return mensage;
    } else if (finalBalance > 0) {
        mensage = "Your finances is okay. You are positive because your balance is $" + finalBalance + "."
        return mensage;
    } else {
        mensage = "Your finances is neutral. Your balance is $" + finalBalance + "."
        return mensage;
    }
}
let result = calcular()
console.log(result)