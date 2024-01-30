const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.submit-button');

openModal.addEventListener('click', () => {
  modal.showModal();
})



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '300 pages', 'not read yet');
console.log(theHobbit.info());

function addBookToLibrary() {
  
}