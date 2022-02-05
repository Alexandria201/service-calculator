import countSalary from './count.js';
import salary from './salary.js';
import period from './period.js';
import userName from './name.js';

// eslint-disable-next-line no-unused-vars
window.displayText = () => {
  const text = `Привет ${userName()}, твой доход ${salary()}  грн. за ${period()} месяца будет 
  ${countSalary()} грн.`;
  document.getElementById('result').innerHTML = text;
}