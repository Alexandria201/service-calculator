function userName() {
  const name = document.getElementById('name').value;
  if (name.length === 0) {
    return "Guest";
  } else {
    return name;
  }
}

function salary() {
  const salary = +document.getElementById('salary').value;
  if (salary <= 0) {
    return 1;
  } else {
    return salary;
  }
}

function period() {
  const period = document.getElementById('period').value;
  if (period <= 0) {
    return 1;
  } else {
    return period;
  }
}

function countSalary() {
  return salary() * period();
}

function displayText() {
  const text = `Привет ${userName()}, твой доход ${salary()}  грн. за ${period()} месяца будет 
  ${countSalary()} грн.`;
document.getElementById('result').innerHTML = text;
}