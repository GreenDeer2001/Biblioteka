import React, { useState} from "react";
import { MdDone } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useParams } from "react-router";
import { useBooksContext } from "../utilities/context";

const Bookpage = () => {
  const { getBook } = useBooksContext();
  const { id } = useParams();
  const [book] = useState(getBook(id));

  const reservationHandler = () => {};

  return (
    <section className="section book">
      <div className="book__center">
        <div className="book__img-container">
          <img className="book__img" src={book.image} alt={book.title} />
        </div>
        <div className="book__info">
          <h1 className="book__info-title">{book.title}</h1>
          <h3 className="book__info-author">{book.author}</h3>
          <h3 className="book__info-category">{book.category}</h3>
          <p className="book__info-text">{book.description}</p>
        </div>
        <div className="book__reservation">
          <button
            className={`book__reservation-btn`}
            onClick={reservationHandler}
          >
            Zarezerwuj
          </button>
          <p className="book__reservation-available">
            Dostępna:{" "}
            <span>
              {book.isRent ? (
                <FaTimes className="red " />
              ) : (
                <MdDone className="green" />
              )}
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bookpage;
