function removeBook(title) {
  const index = books.findIndex(b => b.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    refreshTable();
  }
}
