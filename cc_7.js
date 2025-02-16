// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    return `Total Invoice: $${((subtotal + (subtotal * taxRate)) - discount).toFixed(2)}`
}

console.log(calculateInvoice(100, 0.08, 5))
console.log(calculateInvoice(500, 0.1, 20))