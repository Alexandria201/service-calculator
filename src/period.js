function period() {
  const time = document.getElementById('period').value;
  if (time <= 0) {
    return 1;
  }
  return time;
}

export default period;