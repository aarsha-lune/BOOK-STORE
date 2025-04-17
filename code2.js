<table id="bookTable">
  <tr><th>Title</th><th>Author</th><th>Year</th><th>Genre</th></tr>
</table>

<script>
  const books = [
    { title: "The Explorer's Guide", author: "A. Rivers", year: 2021, genre: "Adventure" },
    { title: "Mystery Manor", author: "L. Holmes", year: 2022, genre: "Mystery" },
    { title: "Digital Dreams", author: "K. Byte", year: 2020, genre: "Sci-Fi" }
  ];

  function displayBooks() {
    const table = document.getElementById("bookTable");
    books.forEach(book => {
      let row = table.insertRow();
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.year}</td><td>${book.genre}</td>`;
    });
  }

  displayBooks();
</script>
