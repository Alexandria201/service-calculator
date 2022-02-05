import salary from './salary';
import period from './period';

function countSalary() {
  return salary() * period();
}
export default countSalary;
