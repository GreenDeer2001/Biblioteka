import React, {useEffect} from "react";
import { useBooksContext } from "../utilities/context";
import { MdDone } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      sortedBooks = sortedBooks.sort((a) => (a.isRent ? 1 : -1));
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
        <div className="catalog__sort-container">
          <label htmlFor="sort">Sortuj: </label>
          <select
            name="sort"
            onChange={(e) => sortHandler(e.target.value)}
            id="sort"
            className="catalog__sort"
          >
            <option value="ALFB">Alfabetycznie</option>
            <option value="FREE">Dostępne</option>
            <option value="POP">Popularność</option>
          </select>
        </div>
        <div className="catalog__list">
          {booksToDisplay.map((item, index) => {
            const { title, image, id, isBorrowed, author } = item;
            return (
              <article key={index} className="catalog__book">
                <div className="catalog__book-imgContainer">
                  <img src={image} alt={title} />
                </div>
                <div className="catalog__book__info">
                  <h4>{title}</h4>
                  <p>{author}</p>
                  <p className="catalog__book__info-rent">
                    {" "}
                    Dostępna:{" "}
                    <span>
                      {isBorrowed ? (
                        <FaTimes className="red " />
                      ) : (
                        <MdDone className="green" />
                      )}
                    </span>{" "}
                  </p>
                </div>
                <Link className="catalog__btn" to={`/katalog/${id}`}>
                  Szczegóły
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
