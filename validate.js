function validateInput(title, author, year, genre) {
  if (!title || !author || !genre || isNaN(year)) {
    alert("Please fill all fields correctly.");
    return false;
  }
  return true;
}
