import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import heroImage from './Assets/onasback.jpg';
import filipImige from './Assets/filip.jpeg';
import lipiImige from './Assets/lipi.jpeg';
import leaderImage2 from './Assets/2.png';
import './Styles/About.css';
import Stack from '@mui/material/Stack';


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      <Stack direction="row" spacing={2}>
       
        <div className='filip'>
        <Stack direction="column">
        <img src={filipImige} className='filiposimigos'></img>
        <h1>Filip Zmrdáček</h1>
        <p className='ppp'>Jmenuji se Filip a rád si strkám různé předměty všech velikostí a tvarů do prdele. Dělá mi to dobře a proto jsem si na tom založil business. Nejdřív vám 
            vyřežu skříň a pak si jí celou narvu do prdele, kde ji smontuju. Následně ji vyndám, přivrtám na zeď a pak si ji na zkoušku ještě jednou narvu doprdele i
            s vašim barákem a potenciálně i s vámi, abych ozkoušel kvalitu, která je jistě maximální.
        </p>

        </Stack>
        </div>


        <div className='lipi'>
        <Stack direction="column">
        <img src={lipiImige} className='lipiosimigos'></img>
        <h1>Lipi Kundíček</h1>
        <p className='ppp'>Jmenuju se lipi a mám rád dřevo. Většinou svym dřevem vyprcávám ňáký kurviska a když zrovna ne, tak čekám,
            až jo. Pocházím s nějaký díry z Ústí do tvý mámy a žiju v malým zámku. Balim na to vesničanky, co potkám
            na návsi. Ale ani bych je balit nemusel, většinou je prostě svážu a odvezu na koni. 
        </p>

        </Stack>
        </div>
      </Stack>
      <Footer />
    </div>
  );
};

export default About;
