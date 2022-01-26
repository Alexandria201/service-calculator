function userName() {
  const name = document.getElementById('name').value;
  if (name.length === 0) {
    return 'Guest';
  }
  return name;
}

function salary() {
  const money = +document.getElementById('salary').value;
  if (money <= 0) {
    return 1;
  }
  return money;
}

function period() {
  const time = document.getElementById('period').value;
  if (time <= 0) {
    return 1;
  }
  return time;
}

function countSalary() {
  return salary() * period();
}

// eslint-disable-next-line no-unused-vars
function displayText() {
  const text = `Привет ${userName()}, твой доход ${salary()}  грн. за ${period()} месяца будет 
  ${countSalary()} грн.`;
  document.getElementById('result').innerHTML = text;
}
