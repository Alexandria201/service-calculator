function salary() {
  const money = +document.getElementById('salary').value;
  if (money <= 0) {
    return 1;
  }
  return money;
}

export default salary;