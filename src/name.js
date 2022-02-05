function userName() {
  const name = document.getElementById('name').value;
  if (name.length === 0) {
    return 'Guest';
  }
  return name;
}

export default userName;