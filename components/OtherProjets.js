import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import config from "react-reveal/globals";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose, faGift, faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function OtherProjets() {
  let infosProjets = [
    {
      id: "4",
      titre: "Application Rappel Islam",
      description:
        "Dans le cadre du deuxième hackaton ,  nous avions pour objectif de réaliser un clone de Twitter en seulement 2 jours. C'était un véritable challenge car on venait à peine de commencer à apprendre React. Nous avons réussi à réaliser un clone de Twitter avec quelques fonctionnalités de base.",
      image: "/background_images/2.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "5",
      titre: "Site de billetterie",
      description:
        "Dans le cadre du premier hackaton ,  nous avions pour objectif de réaliser un site de billetterie en seulement 2 jours . C'est un site permettant d'acheter des billets pour des places de train entre deux villes . On s'est bien régalé à le réaliser.",
      image: "/background_images/3.jpg",
      techno: ["HTML", "CSS", "Javascript", "MongoDb", "Express", "NodeJs"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "6",
      titre: "Site d'informations",
      description:
        "Dans le cadre de notre projet , nous avons réalisé un site d'informations en seulement 2 jours.",
      image: "/background_images/4.jpg",

      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "7",
      titre: "Site d'affiches de films",
      description:
        "Dans le cadre de notre projet , nous avons réalisé un site d'affiches de films en seulement 2 jours.",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
  ];

  let showCss = {};

  config({ ssrFadeout: true });

  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);

  const handleClick = (e) => {
    setShow(true);
    setId(e.target.dataset.id);
  };

  const hideModal = () => {
    setShow(false);
  };

  if (show) {
    showCss = {
      opacity: "1",
      visibility: "visible",
    };
  }

  return (
    <>
      <div
        className={styles.opacityBlur}
        style={showCss}
        onClick={hideModal}
      ></div>
      <div className={styles.modalProjets} style={showCss}>
        <span onClick={hideModal}>
          <FontAwesomeIcon
            className={styles.iconClose}
            icon={faClose}
          ></FontAwesomeIcon>
        </span>
        <div className={styles.contentModalLeft}>
          <h4>Voici le projet {infosProjets[id - 1].titre}</h4>
          <div
            className={styles.contentModalLeftImage}
            style={{
              backgroundImage: `url(${infosProjets[id - 1].image})`,
            }}
          ></div>
        </div>
        <div className={styles.contentModalRight}>
          <h4>Contexte</h4>
          <p>{infosProjets[id - 1].description}</p>
          <h4>Technologies utilisées</h4>
          <div className={styles.contentModalRightTechno}>
            {infosProjets[id - 1].techno.map((techno) => (
              <span>{techno}</span>
            ))}
          </div>
          <h4>Liens</h4>
          <div className={styles.contentModalRightLinks}>
            <a href={infosProjets[id - 1].link[0]} target="_blank">
              Voir le frontend
            </a>
            <a href={infosProjets[id - 1].link[1]} target="_blank">
              Voir le backend
            </a>
            <a
              href={infosProjets[id - 1].link[2]}
              target="_blank"
              className={styles.goToWeb}
            >
              <FontAwesomeIcon
                className={styles.iconGoToWeb}
                icon={faGlobe}
              ></FontAwesomeIcon>
              Voir le site
            </a>
          </div>
        </div>
      </div>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="rappelislam.png" alt="projet 5" />
          <h4>Application Rappel Islam</h4>
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
          <img src="bbh.png" alt="projet 2" />
          <h4>Site Web garagiste</h4>
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
          <img src="toutoucare.png" alt="projet 2" />
          <h4>Application Toutoucare</h4>
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
          <img src="dragonballsuper_film.png" alt="projet 8" />
          <h4>Site d'affiches de film DB Super</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <button onClick={handleClick} data-id="4">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="cloneig.png" alt="projet 2" />
          <h4>Site Clone Instagram</h4>
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
          <img src="mdl.png" alt="projet 2" />
          <h4>Site de réservations d'activités sportives</h4>
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
          <img src="portfolioapple.png" alt="projet 2" />
          <h4>Portfolio design Apple</h4>
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
          <img src="hg.png" alt="projet 2" />
          <h4>Design site e-commerce </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <button onClick={handleClick} data-id="3">
            En savoir plus
          </button>
        </div>
      </Reveal>
    </>
  );
}
