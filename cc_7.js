// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    return `Total Invoice: $${((subtotal + (subtotal * taxRate)) - discount).toFixed(2)}`
}

console.log(calculateInvoice(100, 0.08, 5))
console.log(calculateInvoice(500, 0.1, 20))

// Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    return `Hourly Wage: $${(salary / (hoursPerWeek * 52)).toFixed(2)}`
}

console.log(calculateHourlyWage(52000, 40))
console.log(calculateHourlyWage(75000, 35))