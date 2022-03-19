const loadBook = () => {
    const searchText = document.getElementById('input').value;
    const url = `https://openlibrary.org/search.json?q=javascript`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs, data.num_found));
}



const showTitle =(book)=>{
    const bookTitle = `https://openlibrary.org${book.seed[0]}.json`;
        fetch(bookTitle)
            .then(res => res.json())
            .then(title => document.getElementById('bt').innerText=`${title.subtitle}`);  
}

const displayBook = (books, number) => {
    document.getElementById('book-num').innerHTML = `Total Book : <span class="text-success fw-bold">${number}</span>`;
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {


        // book title
        showTitle(book);
        // booktitle
        // const publish = book?.publish_date.length;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img id="cover-img" class="img-fluid mx-auto my-3" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="...">
        <div class="card-body">
            <h5 id="bt" class="card-title"></h5>
            <p class="card-text">First Publish : </p>
            <p>${book.author_name}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
    console.log(books);
}

