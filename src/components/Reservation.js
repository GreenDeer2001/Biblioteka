import React from "react";
import { useBooksContext } from "../utilities/context";
import { FaTimes } from "react-icons/fa";

const Reservation = ({ isBorrowed }) => {
  const { showReservation, setShowReservation } = useBooksContext();

  const reservationHandler = () => {
    setShowReservation(false);
  };

  if (showReservation) {
    let text = !isBorrowed ? (
      <p>
        Potwierdź rezerwacja a następnie odbierz książkę w ciągu następnych 24h.
      </p>
    ) : (
      <p>
        Obecnie książka nie jest dostępna, zapisz się do kolejki. A otrzymasz
        powiadomienie na email o możliwości odbioru.
      </p>
    );
    return (
      <div className="backdrop">
        <div className="reservation">
          <div className="reservation__header">
            <h1 className="reservation__header-title">Potwierdź rezerwacje</h1>
            <FaTimes
              className="login__header-icon"
              onClick={() => setShowReservation(false)}
            />
          </div>
          <div className="reservation__info">
            {text}
            <button
              className="reservation__info-btn"
              onClick={reservationHandler}
            >
              Potwierdź
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Reservation;
