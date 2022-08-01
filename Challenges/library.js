class Book {
    constructor(title, description, author){
        this.title = title;
        this.description = description;
        this.author = author;
    }
    addId(Id){
        this.Id = Id;
    }
 }

 class Library {
    constructor(books){
        this.books = [];
        this.id = 1; // IDs são sempre únicos, mesmo se um livro for excluído, nenhum livro terá o mesmo ID.
    }
    addBook(bookInfo){
        let novoLivro = new Book(bookInfo[0], bookInfo[1], bookInfo[2]);
        novoLivro.addId(this.id);
        this.id++;
        this.books.push(novoLivro);
        console.log(`Book ${novoLivro.title} was added with ID ${novoLivro.Id}.`);
    }
    getBooks(){
        console.log(this.books);
    }
    removeBookById(id){
        let livroExcluido = '';
        this.books = this.books.filter((livro) => {if(livro.Id != id){return livro} else{livroExcluido = livro}});
        console.log(`Book ${livroExcluido.title}, ID ${livroExcluido.Id} was Removed.`);
    }
    getBookById(id){
        let livroEscolhido = this.books.filter((livro) => {if(livro.Id === id){return livro}})[0];
                
        console.log(`Book ${livroEscolhido.title} was selected.
        \nDescription: ${livroEscolhido.description},
        \nAuthor: ${livroEscolhido.author},
        \nID: ${livroEscolhido.Id}.`)
    }
    updateBookById(id, info){
        let livroEscolhido = this.books.filter((livro) => {if(livro.Id === id){return livro}})[0];
        this.removeBookById(id)
        livroEscolhido.title = info[0]
        livroEscolhido.description = info[1]
        livroEscolhido.author = info[2]
        this.books.push(livroEscolhido)
    }
}



let biblio = new Library();
biblio.addBook(['teste1', 'aaa', 'Ana']);
biblio.addBook(['teste2', 'bbb', 'Joao']);
biblio.addBook(['teste3', 'ccc', 'Maria']);
biblio.addBook(['teste4', 'ddd', 'Jose']);
biblio.getBooks();
biblio.removeBookById(1);
biblio.getBooks;
biblio.getBookById(3);
biblio.updateBookById(3, ['teste5', 'eee', 'Luiza']);
biblio.getBooks;
