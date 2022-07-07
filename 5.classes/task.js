//1 задача
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState <= 0) {
      newState = 0;
    } else if (newState >=100) {
      newState = 100;    }
    this._state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
    this.state = 100;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
    this.state = 100;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = "novel";
    this.state = 100;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = "fantastic";
    this.state = 100;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = "detective";
    this.state = 100;
  }
}

//2 задача
class Library {
  constructor(name) {
    this.name= name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const result = this.books.filter(book => (book[type] === value));
    if (result.length != 0) {
     return result[0];
    } else {
    return null;
    }
  }


  giveBookByName(bookName) {
    const result2 = this.books.filter(book => book.name === bookName);
    if (result2.length != 0) {
      const result3 = this.books.findIndex(book => book.name === bookName);
      this.books.splice(result3, 1);
      return result2;
    } else {
      return null;
    }
  }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log();

console.log(library.findBookBy("releaseDate", 1924));
console.log(library.findBookBy("name", "Властелин колец"));

console.log();
                                              
console.log("Количество книг до выдачи: " + library.books.length); 
console.log (library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length);

console.log();

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 

console.log();

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 