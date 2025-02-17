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

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    if (years >= 5) {
        return `Discounted Price: $${(amount - (amount * 0.15)).toFixed(2)}`
    }
    if (years >= 3) {
        return `Discounted Price: $${(amount - (amount * 0.10)).toFixed(2)}`
    }
    if (years < 3) {
        return `Discounted Price: $${(amount - (amount * 0.05)).toFixed(2)}`
    }
}

console.log(calculateLoyaltyDiscount(100,6))
console.log(calculateLoyaltyDiscount(200,2))

// Task 4: Parameters & Arguments
function calculateShippingCost(weight, location, expedited = false) {
    if (location === "USA" && expedited) {
        return `Shipping Cost: $${(5 + (0.5 * weight) + 10).toFixed(2)}`
    }
    if (location === "USA") {
        return `Shipping Cost: $${(5 + (0.5 * weight)).toFixed(2)}`
    }
    if (location === "Canada" && expedited) {
        return `Shipping Cost: $${(10 + (0.7 * weight) + 10).toFixed(2)}`
    }
    if (location === "Canada") {
        return `Shipping Cost: $${(10 + (0.7 * weight)).toFixed(2)}`
    }
}

console.log(calculateShippingCost(10, "USA", true))
console.log(calculateShippingCost(5, "Canada", false))

// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years){
    return `Total Interest: $${(principal * rate * years).toFixed(2)}`
}
console.log(calculateLoanInterest(1000, 0.05, 3))
console.log(calculateLoanInterest(5000, 0.07, 5))