import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import config from "react-reveal/globals";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose, faGift, faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Projets() {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];

  let infosProjets = [
    {
      id: "1",
      titre: "Clone de Twitter",
      description:
        "Dans le cadre du deuxième hackaton ,  nous avions pour objectif de réaliser un clone de Twitter en seulement 2 jours. C'était un véritable challenge car on venait à peine de commencer à apprendre React. Nous avons réussi à réaliser un clone de Twitter avec quelques fonctionnalités de base , (si il y'a un problème au niveau de l'icone 'like'  , je suis entrain de le régler (rafraichissez svp XD)",
      image: "/background_images/2.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "2",
      titre: "Site de billetterie",
      description:
        "Dans le cadre du premier hackaton ,  nous avions pour objectif de réaliser un site de billetterie en seulement 2 jours . C'est un site permettant d'acheter des billets pour des places de train entre deux villes . On s'est bien régalé à le réaliser.",
      image: "/background_images/3.jpg",
      techno: ["HTML", "CSS", "Javascript", "MongoDb", "Express", "NodeJs"],
      link: [
        "https://github.com/oussamadabachil/frontendTicketHack",
        "https://github.com/oussamadabachil/backendTicketHack",
        "https://oussamadabachil.github.io/frontendTicketHack/",
      ],
    },
    {
      id: "3",
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
      id: "4",
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
        <Reveal effect="fadeInUp">
        <div className={styles.contentModalLeft}>
          <h4>{infosProjets[id - 1].titre}</h4>

          <div
            className={styles.contentModalLeftImage}
            style={{
              backgroundImage: `url(${infosProjets[id - 1].image})`,
            }}
          ></div>
        </div>
        </Reveal>
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
          <img src="/twitterpngWhite.jpg" alt="projet 1" />
          <h4>Clone de Twitter</h4>
          <p>
           {infosProjets[0].description.substring(0,80)+"..."}
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
          {infosProjets[1].description.substring(0,80)+"..."}

          </p>
          <button onClick={handleClick} data-id="2">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="ousssnews.gif" alt="projet 2" />
          <h4>Site d'informations</h4>
          <p>
          {infosProjets[2].description.substring(0,80)+"..."}

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
          {infosProjets[3].description.substring(0,80)+"..."}
          </p>
          <button onClick={handleClick} data-id="4">
            En savoir plus
          </button>
        </div>
      </Reveal>
    </>
  );
}