const loadBook=()=>{
    const searchText =  document.getElementById('input').value;
    const url=`https://openlibrary.org/search.json?q=cplus`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs,data.num_found));
}

const displayBook=(books,number)=>{
    document.getElementById('book-num').innerHTML=`Total Book : <span class="text-success fw-bold">${number}</span>`;
    const searchResult=document.getElementById('search-result');
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
        <img class="cover-img img-fluid h-50 w-50" src="https://covers.openlibrary.org/b/id/${book.id_goodreads}-S.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
    console.log(books);
}

