function updateBook(title, newAuthor, newYear, newGenre) {
  const book = books.find(b => b.title === title);
  if (book) {
    book.author = newAuthor;
    book.year = parseInt(newYear);
    book.genre = newGenre;
    refreshTable(); // A function that clears and re-renders the table
  }
}
