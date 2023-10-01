const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0; 

const taxAsDecimal = parseFloat(tax) / 100; // Corrected the conversion and calculation
const AfterTax = salary * (1 - taxAsDecimal); // Corrected the calculation
const balance = AfterTax - transport - food - rent; 

if (hourOfDay === 0 && minuteOfDay === 0) { 
  console.log('R',balance.toFixed(3)); // Moved the console.log inside the if block
} else {
  console.log('Time is not 00:00');
}
