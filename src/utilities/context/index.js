import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useBooks } from "../hooks";

const BooksContext = React.createContext();

const ContextProvider = ({ children }) => {
  const { books: booksToDisplay } = useBooks();
  const [loading, setLoading] = useState(true);
  const [showReservation,setShowReservation] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [gotoAccount, setGotoAccount] = useState(false);
  const [isLoginHandler,setIsLoginHandler] = useState(false);

     auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoginHandler(true)
      } else {
        setIsLoginHandler(false)

      }
    });


  useEffect(() => {
    setLoading(true);
    if (booksToDisplay) {
      setLoading(false);
    }
  }, [booksToDisplay]);

  const getBook = (id) => {
    return booksToDisplay.find((book) => book.id === id);
  };

  return (
    <BooksContext.Provider
      value={{
        booksToDisplay,
        loading,
        showLoginForm,
        getBook,
        isLoginHandler,
        setShowReservation,
        showReservation,
        setShowLoginForm,
        setGotoAccount,
        gotoAccount,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, ContextProvider, useBooksContext };
