import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import config from "react-reveal/globals";

export default function Projets() {



  config({ ssrFadeout: true });


  const [show, setShow] = useState(false);
  const [id, setId] = useState("0");

  const handleClick = (e) => {
    setShow(true);
    setId(e.target.dataset.id);
    alert(id);
  };



  return (
    <>
    <Reveal effect="fadeInUp">
      <div className={styles.mesProjets}>
        <img src="/twitterpngWhite.jpg" alt="projet 1" />
        <h4>Clone de Twitter</h4>
        <p>
         Dans le cadre de notre projet , nous avons réalisé un clone de Twitter en seulement 2 jours.
        </p>
        <button onClick={handleClick} data-id="1">En savoir plus</button>
      </div>
      </Reveal>
      <Reveal effect="fadeInUp">
      <div className={styles.mesProjets}>
      <img src="tickethackpngWhite.jpg" alt="projet 2" />
        <h4>Site de billetterie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button onClick={handleClick} data-id="2">En savoir plus</button>
      </div>
      </Reveal>
      <Reveal effect="fadeInUp">
      <div className={styles.mesProjets}>
        <img src="oussflixpng.jpg" alt="projet 2" />
        <h4>Site d'informations
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button onClick={handleClick} data-id="3">En savoir plus</button>
      </div>
      </Reveal>
      <Reveal effect="fadeInUp">
      <div className={styles.mesProjets}>
      <img src="oussflixpng.jpg" alt="projet 2" />
        <h4>Site d'affiches de films</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button onClick={handleClick} data-id="4">En savoir plus</button>
      </div>
      </Reveal>
    </>
  );
}
