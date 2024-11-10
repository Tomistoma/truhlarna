import React from 'react';
import './Styles/Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import leaderImage1 from './Assets/3.png';
import leaderImage2 from './Assets/3.png';
import './Styles/Kontakt.css';

const Kontakt = () => {
  return (
    <div>
      <Navbar />
     
        {/* Inquiry Form */}
        <div className="inquiry-form">
          <h2>Kontaktujte nás</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Jméno:</label>
              <input type="text" id="name" name="name" placeholder="Veronika Bednářová" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Vera.bednarova@seznam.cz" required />
            </div>
            <div className="form-group">
              <label htmlFor="telnumber">Tel. číslo:</label>
              <input type="text" id="telnumber" name="telnumber" placeholder="777888999" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Poptávka:</label>
              <textarea id="message" name="message" rows="5" placeholder="3 skříně, kuchyň a palandu pro děcka" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Poslat poptávku</button>
          </form>

   
    </div>   <Footer /></div>
  );
};

export default Kontakt;
