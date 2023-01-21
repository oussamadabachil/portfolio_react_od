import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import config from "react-reveal/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function Projets() {

  let infosProjets = [
    {
      id: "1",
      titre: "Clone de Twitter",
      description:
        "Dans le cadre de notre projet , nous avons réalisé un clone de Twitter en seulement 2 jours.",
      image: "/twitterpngWhite.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs"],
    },
    {
      id: "2",
      titre: "Site de billetterie",
      description:
      "Dans le cadre de notre projet , nous avons réalisé un site de billetterie en seulement 2 jours.",
      image: "/tickethackpngWhite.jpg",
      techno: ["HTML",'CSS', "Javascript", "MongoDb", "Express", "NodeJs"],
    },
    {
      id: "3",
      titre: "Site d'informations",
      description:
      "Dans le cadre de notre projet , nous avons réalisé un site d'informations en seulement 2 jours.",  
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", 'API'],
    },
    {
      id: "4",
      titre: "Site d'affiches de films",
      description:
      "Dans le cadre de notre projet , nous avons réalisé un site d'affiches de films en seulement 2 jours.",
      image: "/oussflixpng.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", 'API'],
    },
  ];

      

let showCss = {
}

  config({ ssrFadeout: true });

  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);

  const handleClick = (e) => {
    setShow(true);
    setId(e.target.dataset.id);
    alert(infosProjets[0].titre);



  };


  const hideModal = ()=>{
    setShow(false);

  }


  if(show){
showCss = {
 opacity:'1',
 visibility :'visible',
}

  }



  return (
    <>
      <div className={styles.modalProjets} style={showCss}>
        <span onClick={hideModal}>
          <FontAwesomeIcon  className={styles.iconClose} icon={faClose}></FontAwesomeIcon>
        </span>
        <div className={styles.contentModalLeft}>
          <h4>Salut {infosProjets[id-1].titre}</h4>
        </div>
        <div className={styles.contentModalRight}></div>
      </div>

      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="/twitterpngWhite.jpg" alt="projet 1" />
          <h4>Clone de Twitter</h4>
          <p>
            Dans le cadre de notre projet , nous avons réalisé un clone de
            Twitter en seulement 2 jours.
          </p>
          <button onClick={handleClick} data-id="1">
            En savoir plus
          </button>
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
          <button onClick={handleClick} data-id="2">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="oussflixpng.jpg" alt="projet 2" />
          <h4>Site d'informations</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <button onClick={handleClick} data-id="3">
            En savoir plus
          </button>
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
          <button onClick={handleClick} data-id="4">
            En savoir plus
          </button>
        </div>
      </Reveal>
    </>
  );
}
