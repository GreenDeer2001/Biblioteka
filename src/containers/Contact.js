import React, {useRef} from "react";

const Contact = () => {
  const email = useRef();
  const title = useRef()
  const tel = useRef();
  const text = useRef();

    const submitHandler = (e) =>{
        e.preventDefault();
        const titleF = title.current.value;
        const emailF = email.current.value;
        const telF = tel.current.value;
        const textF = text.current.value;
        console.log(titleF,emailF,telF,textF)
    }
  return (
    <section className="section">
      <div className="contact-center">
        <div className="contact-info-maps">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81701.92355459533!2d18.937153328994064!3d50.21376120199417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e0!3m2!1sen!2spl!4v1604990071722!5m2!1sen!2spl"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-info-text">
          <p>
            al. Niepodległości 213 <br/> 02-086 Warszawa  <br/> e-mail: kontakt@gmail.pl  <br/>
            tel. (22) 635 27 77  <br/> Godziny otwarcia: poniedziałek–sobota 8.30–20.30
          </p>
        </div>
        <form id="form"className="contact__form" onSubmit={submitHandler}>
          <h1 className="contact__form-title">Napisz do nas</h1>
            <input type="text" ref={title} className="contact__form-input" placeholder="Tytuł (wymagane)" required/>
            <input type="email" ref={email} className="contact__form-input" placeholder="Twój Email (wymagane)" required/>
            <input type="tel" ref={tel} className="contact__form-input" placeholder="Numer Telefonu"/>
            <textarea name="text" ref={text} className="contact__form-input" placeholder="Opis (wymagane)"  cols="30" rows="7" required></textarea>
          <button type="submit" className="contact__form-btn" >Potwierdź</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
