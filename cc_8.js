// Task 1
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // Net Salary: $5000
console.log(calculateSalary(7000, 1000, 0.15)); // Net Salary: $6950

// Task 2
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}
console.log(calculateDiscount(100, 0.2)); // Final Price: $80.00
console.log(calculateDiscount(250, 0.15)); // Final Price: $212.50

// Task 3
let calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    switch (serviceType) {
        case `Premium`:
            fee = amount * 0.15;
            break;
        case `Standard`:
            fee = amount * 0.10;
            break;
        case `Basic`:
            fee = amount * 0.05;
            break;
    }
    return `Service Fee: $${fee.toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); // Service Fee: $30.00
console.log(calculateServiceFee(500, "Standard")); // Service Fee: $50.00