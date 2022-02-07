function userName() {
  const name = document.getElementById('name').value;
  name.length === 0 ? 'Guest' : name;
}

export default userName;