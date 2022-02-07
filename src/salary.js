function salary() {
  const money = +document.getElementById('salary').value;
  money <= 0 ? 1 : money
}

export default salary;