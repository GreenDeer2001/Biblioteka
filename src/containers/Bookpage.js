import React, { useState, useEffect, useMemo } from "react";
import { MdDone } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useParams } from "react-router";
import { db } from "../firebase";
import { useBooksContext } from "../utilities/context";
import Reservation from "../components/Reservation";

const getBook = async (id) => {
  let singleBook = "";
  await db
    .collection("books")
    .where("id", "==", id)
    .get()
    .then((snap) => {
      singleBook = { ...snap.docs[0].data() };
    });
  return singleBook;
};

const Bookpage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const {setShowReservation , isLoginHandler, setShowLoginForm} = useBooksContext();

  useMemo(() => {
    getBook(id).then((response) => {
      setBook(response);
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    if (book) {
      setLoading(false);
    }
  }, [book]);

  const reservationHandler = () => {
     if( isLoginHandler){
      setShowReservation(true);
    }else{
      setShowLoginForm(true);
    }
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
   <Reservation isBorrowed={book.isBorrowed}/>
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
