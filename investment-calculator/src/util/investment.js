// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  console.info("test: ", initialInvestment, annualInvestment, expectedReturn, duration);
  const annualData = [];
  let investmentValue = initialInvestment;
  let annualInvestmentCounter = 0;
  let totalInterest = 0;
  let totalInvestment = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualInvestmentCounter += annualInvestment;
    totalInterest = investmentValue - ( annualInvestment * (i+1) ) - initialInvestment;
    totalInvestment = investmentValue - totalInterest;
    annualData.push({
      year: i + 1, // year identifier
      interest: formatter.format(interestEarnedInYear), // the amount of interest earned in this year
      valueEndOfYear: formatter.format(investmentValue), // investment value at end of year
      annualInvestment: formatter.format(annualInvestmentCounter), // investment added in this year
      totalInterest: formatter.format(totalInterest),
      totalInvestment: formatter.format(totalInvestment),
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
