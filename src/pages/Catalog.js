import React, {useEffect} from "react";
import { useBooksContext } from "../utilities/context";
import CatalogCard from "../components/Catalog/CatalogCard";
import CatalogSort from "../components/Catalog/CatalogSort";

const Catalog = () => {
  const {booksToDisplay : books,loading} = useBooksContext();
  const [booksToDisplay, setBooksToDisplay] = React.useState(books);
  const searchValue = React.useRef();


  useEffect(() => {
    setBooksToDisplay(books)    
  }, [books])

 
  const searchHandler = () => {
    const value = searchValue.current.value.toUpperCase();

    const filtered = books.filter(
      (book) =>
        book.title.toUpperCase().includes(value) ||
        book.author.toUpperCase().includes(value)
    );
    setBooksToDisplay(filtered);
  };

  const sortHandler = (e) => {
    let sortedBooks = [...booksToDisplay];
    if (e === "ALFB") {
      sortedBooks = sortedBooks.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (e === "FREE") {
      sortedBooks = sortedBooks.sort((a) => (a.isBorrowed) ? 1 : -1);
    } else if (e === "POP") {
      sortedBooks = sortedBooks.sort((a, b) =>
        a.popularity <= b.popularity ? 1 : -1
      );
    }
    setBooksToDisplay(sortedBooks);
  };

  if(loading){
    return (<div>Loading</div>)
  }
  return (
    <section className="section catalog">
      <div className="catalog-center">
        <div className="catalog__search-container">
          <input
            ref={searchValue}
            onChange={searchHandler}
            type="search"
            className="catalog__search"
            placeholder="Szukaj"
          />
        </div>
       <CatalogSort sortHandler={sortHandler}/>
        <div className="catalog__list">
          {booksToDisplay.map((item, index) => {
            return <CatalogCard {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
