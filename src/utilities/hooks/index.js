import { useState, useEffect } from "react";
import { db } from "../../firebase";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.collection("books")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((item) => {
          temp.push(item.data());
        });
        setBooks(temp);
      });
  }, []);

  return { books };
};

const useSingleBook = (id) => {
  const [singleBook,setBook] = useState({});


  useEffect(() => {
    db.collection("books")
    .where("id", "==", id)
    .get()
    .then((book) => {
      setBook(book.docs[0].data());
    });
  }, [id])

 

    return [singleBook];
}

export { useBooks,useSingleBook };
