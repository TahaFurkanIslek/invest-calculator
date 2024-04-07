const InvestCalculator = (initialInvestmentF, monthlyContributionF, powerF, range) => {
    function calculateMonthlyProgress(power) {
        let monthlyProgress = Math.pow(power, 1 / 12)
        return monthlyProgress
    }
    let total = initialInvestmentF;
    let monthlyInterestRate = calculateMonthlyProgress(powerF)
    let months = range * 12
    for (let i = 0; i < months; i++) {
        total += monthlyContributionF;
        total *= monthlyInterestRate;
    }
    const totalInvestment = total
    let finalValue = []
    let count = 1
    for (let i = 0; i < totalInvestment.toFixed(2).toString().length - 3; i++) {
        if (count === 4) {
            finalValue.unshift(".")
            count = 1
        }
        finalValue.unshift(totalInvestment.toFixed(2).toString()[totalInvestment.toFixed(2).toString().length - 4 - i])
        count += 1
    }
    let answer = ""
    for (let i = 0; i < finalValue.length; i++) {
        answer = answer + finalValue[i]
    }
    let kurus = totalInvestment.toFixed(2).toString()[totalInvestment.toFixed(2).toString().length - 1] + totalInvestment.toFixed(2).toString()[totalInvestment.toFixed(2).toString().length - 2]
    return answer + " TL " + kurus + " kurus"
}
const CalculateNewCost = (prevLotMaliyet, prevLot, currentLotMaliyet, currentSermaye) => {
    let prevSermaye = prevLotMaliyet * prevLot
    let currentLot = parseInt(currentSermaye / currentLotMaliyet)
    let currentSermayeMain = parseInt(currentSermaye / currentLotMaliyet) * currentLotMaliyet
    let kalanNakit = currentSermaye - currentSermayeMain
    let guncelMaliyet = (prevSermaye + currentSermayeMain) / (prevLot + currentLot)
    return "Alım sonrası lot Maliyetiniz: " + guncelMaliyet.toFixed(2) + " Kalan nakitiniz: " + kalanNakit.toFixed(2)
}
const CalculateMoneyINeed = (istenilenMaliyet, oncekiLotSayisi, oncekiLotFiyati, guncelLotFiyati) => {
    let oncekiSermaye = oncekiLotSayisi * oncekiLotFiyati
    let a = ((istenilenMaliyet * oncekiLotSayisi) - oncekiSermaye)
    a = a / (guncelLotFiyati - istenilenMaliyet)
    let gerekenPara = a * guncelLotFiyati
    return gerekenPara.toFixed(2) + " TL'lik bir alım yapmanız gerekmektedir"
}
export default {
    InvestCalculator,
    CalculateNewCost,
    CalculateMoneyINeed
}