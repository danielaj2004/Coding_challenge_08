// Task 1
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // Net Salary: $5000
console.log(calculateSalary(7000, 1000, 0.15)); // Net Salary: $6950