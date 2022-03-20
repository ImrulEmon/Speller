// var dataT;
const load = document.getElementById('load');
const loadBook = () => {
    load.style.display="block";
    const searchResult = document.getElementById('search-result');
     searchResult.textContent='';
     document.getElementById('book-num').textContent='';
    const searchTextField = document.getElementById('input');
    const searchText = searchTextField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs, data.num_found));
        
}

// -------------display book----------------
const displayBook = (books, number) => {
     // -------------get result div----------------
     const searchResult = document.getElementById('search-result');
     searchResult.textContent='';
     const searchTextField = document.getElementById('input');
     const searchText = searchTextField.value;
    if(number){
        document.getElementById('book-num').innerHTML = `Total Books for <span class="text-info fw-bold">${searchText}</span> : <span class="text-success fw-bold">${number}</span>`;
    //--------each book------------
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('rounded-3');
        div.innerHTML = `
        <div class="card h-100">
        <img id="cover-img" class="img-fluid mx-auto my-3" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">${book.title}</h5>
            <p class="card-text">First Publish : ${book.first_publish_year}</p>
            <p>${book.author_name}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
   
    }
    else{
        searchResult.textContent='';
        searchResult.innerHTML=`
        <img src ="error.jpg" class="mx-auto">
        `;
        searchResult.classList.add("middle");
    }
    load.style.display="none";
    console.log(books);
}
// -------------// Enter click event/----------------
var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button-search").click();
  }
});