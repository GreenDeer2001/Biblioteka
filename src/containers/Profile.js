import React, {useState,useEffect} from 'react'
import {useBooksContext} from "../utilities/context";
import {useHistory} from "react-router-dom";
import {auth} from "../firebase";

const Profile = () => {

    const {setGotoAccount,setShowLoginForm} = useBooksContext();
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            if (user) {
              setLoading(false)
              setEmail(user.email)
            } else {
                history.push("/")
                setGotoAccount(true);
                setShowLoginForm(true);
            }
          });
    })
 
  
    
      if(loading){
          return <div>loading......</div>
      }

    return (
        <section className="section profile">
            <div className="profile__center">
                <div className="profile__info">
                    <h2>Email: <span>{email}</span></h2>
                </div>
                <div className="profile__books">
                    <h1>Książki zarezerwowane: </h1>
                    <div className="profile__books_container">

                    </div>
                </div>
                <div className="profile__books">
                    <h1>Książki wypożyczone: </h1>
                    <div className="profile__books_container">
                        
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Profile
