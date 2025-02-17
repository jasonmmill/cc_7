// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) { // create function and parameters
    return `Total Invoice: $${((subtotal + (subtotal * taxRate)) - discount).toFixed(2)}` // invoice formula and cap at 2 decimal places 
}

console.log(calculateInvoice(100, 0.08, 5)) // log results for different outcomes
console.log(calculateInvoice(500, 0.1, 20))

// Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) { // create function and parameters
    return `Hourly Wage: $${(salary / (hoursPerWeek * 52)).toFixed(2)}` // hourly wage formula and cap at 2 decimal places 
}

console.log(calculateHourlyWage(52000, 40)) // log results for different outcomes
console.log(calculateHourlyWage(75000, 35))

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => { // arrow function used and parameters established
    if (years >= 5) {
        return `Discounted Price: $${(amount - (amount * 0.15)).toFixed(2)}` // scenario if 5 or mor years
    }
    if (years >= 3) {
        return `Discounted Price: $${(amount - (amount * 0.10)).toFixed(2)}` // scenario if 3 or 4 years
    }
    if (years < 3) {
        return `Discounted Price: $${(amount - (amount * 0.05)).toFixed(2)}` // scenario if less than 3 years
    }
}

console.log(calculateLoyaltyDiscount(100,6)) // log results for different outcomes
console.log(calculateLoyaltyDiscount(200,2))

// Task 4: Parameters & Arguments
function calculateShippingCost(weight, location, expedited = false) { // create function and add parameters. take note of expedited's default value
    if (location === "USA" && expedited) { // do NOT write "expidited = true" here. it will cause the code to malfunction. simply "expedited"
        return `Shipping Cost: $${(5 + (0.5 * weight) + 10).toFixed(2)}`
    }
    if (location === "USA") { // scenario for USA and standard shipping
        return `Shipping Cost: $${(5 + (0.5 * weight)).toFixed(2)}`
    }
    if (location === "Canada" && expedited) { // scenario for canada and expedited shipping
        return `Shipping Cost: $${(10 + (0.7 * weight) + 10).toFixed(2)}`
    }
    if (location === "Canada") { // scenario for canada and standard shipping
        return `Shipping Cost: $${(10 + (0.7 * weight)).toFixed(2)}`
    }
}

console.log(calculateShippingCost(10, "USA", true)) // log results for different outcomes
console.log(calculateShippingCost(5, "Canada", false))

// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years){ // function and parameters
    return `Total Interest: $${(principal * rate * years).toFixed(2)}` // interest formula and cap at 2 decimal places
}
console.log(calculateLoanInterest(1000, 0.05, 3)) // log results for different outcomes
console.log(calculateLoanInterest(5000, 0.07, 5))

// Task 6: Higher Order Functions
let transactions = [ 500, 1200, 3000, 800, 2200 ] // array declaration

function filterHighValueTransactions(transactions, filterFunction) { // higher order function with parameters
    return transactions.filter(transaction => filterFunction(transaction)) // uses parameters to filter based on filterFunction
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)) // log results 

// Task 7: Closures 
function createBudgetTracker() { // create function with no parameters
    let total = 0 // establish initial running total as 0
    return function(amount) { // call another function with a new parameter "amount"
        return `Current Balance: -$${(total += amount).toFixed(2)}` // formula to add to running total of expenses
    }
}
let budget = createBudgetTracker() // output based on assignment

console.log(budget(300)) // log results for different outcomes 
console.log(budget(200))

// Task 8: Recursion in JavaScript
function calculateGrowth(years, revenue) { // establish function and parameters
    if (years >= 10) return revenue; // cap recursive function at 10 years
    revenue *= 1.05 // growth rate
    return calculateGrowth(years + 1, revenue) // recursion
}

console.log(`Projected Revenue: $${(calculateGrowth(8, 1000)).toFixed(2)}`) // log results for different outcomes
console.log(`Projected Revenue: $${(calculateGrowth(5, 5000)).toFixed(2)}`)