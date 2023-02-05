export function CalculateIMC(weight, height) {
    return Math.round(weight / ((height / 100) ** 2))
}