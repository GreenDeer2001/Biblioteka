import React, {useContext, useState} from "react";
import {books} from "../data/books";

const BooksContext = React.createContext();

const ContextProvider = ({children}) =>{
    
    const [booksToDIsplay,setBooksToDisplay] = useState(books)
    
    const getBook = (id) =>{
        return books.find(book => book.id === id)
    }


    return(
        <BooksContext.Provider value={{booksToDIsplay,getBook}} >
            {children}
        </BooksContext.Provider>
    )
}

const useBooksContext = ()=>{
    return useContext(BooksContext)
}

export  {BooksContext,ContextProvider,useBooksContext};