// Buscando dados dentro de um array


const booksByCategory = [

    {
        category: "Riqueza",
        books: [{
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "Geoge S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [{
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    },

];

function countCategorie() {
    let numberOfCategories = booksByCategory.length
    console.log(numberOfCategories)

}
countCategorie()

function countBooksOfCategory() {
    for (let quantBooks of booksByCategory) {
        console.log("A categoria " + quantBooks.category + " possui " + quantBooks.books.length + " livros")
    }
}
countBooksOfCategory()

function countAuthors() {
    let authors = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("A quantidade de autores é " + authors.length)
}
countAuthors()

function booksByAuthor(name) {
    let authorBooks = []
    let authorName = String(name).toLowerCase()

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if ((book.author).toLowerCase() == authorName) {
                authorBooks.push(book.title)
            }
        }
    }
    console.log("Os livros do autor " + name + " são: " + authorBooks.join(", "))
}
booksByAuthor("Geoge S. Clason")
booksByAuthor("Augusto Cury")