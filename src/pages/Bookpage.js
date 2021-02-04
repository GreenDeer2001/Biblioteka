import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useParams } from "react-router";
import { useBooksContext } from "../utilities/context";
import Reservation from "../components/Reservation";
import { useSingleBook } from "../utilities/hooks";

const Bookpage = () => {
  const { id } = useParams();
  const [book] = useSingleBook(id);
  const {
    setShowReservation,
    isLoginHandler,
    setShowLoginForm,
  } = useBooksContext();

  const reservationHandler = () => {
    if (isLoginHandler) {
      setShowReservation(true);
    } else {
      setShowLoginForm(true);
    }
  };

  return (
    <>
      <Reservation isBorrowed={book.isBorrowed} />
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
                {book.isBorrowed ? (
                  <FaTimes className="red " />
                ) : (
                  <MdDone className="green" />
                )}
              </span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookpage;
