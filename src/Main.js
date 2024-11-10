import {React, useEffect, useState} from 'react';
import heroImage from './Assets/backgroundCropped2.jpeg';
import './Styles/Main.css';
import Navbar from './Navbar';
import imi1 from './Assets/1.png';
import imi2 from './Assets/5.png';
import imi3 from './Assets/3.png';
import Footer from './Footer';

const Main = () => {
  
  return (
    <div className="main-content">
        <Navbar/>
          <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-text">
  <h4>Truhlářstvím za štěstím: dřevo, které zanechá třísku ve vašem srdci.</h4>
  <p>
  Na míru vytvořené skříně, které dokonale zapadnou do vašeho domova a splní všechna vaše přání. Každý kus je pečlivě navržen s ohledem na váš prostor, styl a funkčnost, abyste získali maximální úložný prostor i estetický zážitek. Naše skříně spojují kvalitní řemeslnou práci s moderním designem, což vám zaručuje dlouhou životnost a spokojenost. Nechte si od nás vytvořit skříň, která se stane neodmyslitelnou součástí vašeho každodenního života.
  </p>
</div>


{/* navbar */}
<div class="secondary-navbar">
  <ul>
    <li><a href="/onas">O Nás</a></li>
    <li><a href="/projekty">Projekty</a></li>
    <li><a href="/kontakt">Kontakt</a></li>
  </ul>
</div>



          {/* Ukázky projektů */}
      <div className="featured-content">
        <div className="featured-item">
          <img src={imi1} alt="Feature 1" className="featured-image" />
          <h4>Elegantní, moderní kuchyně na míru, s precizním designem v černém matném kameni s dřevěným prvkem</h4>
        </div>
        <div className="featured-item">
          <img src={imi2} alt="Feature 2" className="featured-image" />
          <h4>Skříně pro nějakýho zkurvenýho právníka, co si musí pořídit pokoj skříní, aby měla jeho žena kam dávat boty</h4>
        </div>
        <div className="featured-item">
          <img src={imi3} alt="Feature 3" className="featured-image" />
          <h4>Tohle se dá koupit v ikee za půlku peněz.....</h4>
        </div>
      </div>
      <a className="news-tag" href="/projekty" >Další projekty</a>


<div class="contact-container">
    <a href="/kontakt" class="contact-button">
        Kontaktujte nás
    </a>
</div>


<Footer/>
    </div>
  );
};

export default Main;
