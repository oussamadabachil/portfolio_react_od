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

  
  let infosOtherProjets = [
    {
      id: "6",
      titre: "Application Rappel Islam",
      description:
        "Rappel Islam est une application qui permet de nous rappeler de notre Créateur , vous y trouverez  des rappels écrits et audio et vous aurez droit à des notifications qui vous rappeleront le droit chemin.",
      image: "/background_images/2.jpg",
      techno: ["Swift Storyboard"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "7",
      titre: "Site vitrine garagiste",
      description:
        "J'ai conçu ce site pour un garagiste et puis hébergé chez Hostinger .",

      image: "/background_images/3.jpg",
      techno: ["HTML", "CSS", "Javascript", "MongoDb", "Express", "NodeJs"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "7",
      titre: "Application Toutoucare",
      description:
        "  L'application Toutoucare permet à des propriétaires de chiens d'inscrire leur chien dans une crèche spécialisée . Vous pouvez réserver à l'horaire que vous voulez , accéder et télécharger vos factures ",
      image: "/background_images/4.jpg",

      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "8",
      titre: "Site d'affiches de films",
      description:
        "Cette page web présente le film Dragon Ball Super : Broly . Vous y trouverez des moments cultes et épiques du film ",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "9",
      titre: "Site Clone Instagram",
      description:
        " Ce site est un clone de la page de connexion Instragram . Une fois que vous êtes connectés , vous trouverez un message de bienvenue",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "10",
      titre: "Site de réservations d'activités sportives",
      description:
        "Ce site permet aux personnes de s'inscrire et de pouvoir consulter des activités sportives . Ils peuvent aussi réserver leur séances mais aussi consulter leur profil et leurs réservations .",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "11",
      titre: "Portfolio design Apple",
      description:
        " Ce site est l'un de mes premiers portfolios (car oui j'en ai fais (beaucoup) , mais pour celui-ci , je me suis un peu inspiré du site d'Apple",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "12",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "13",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "14",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
    {
      id: "12",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
      image: "/background_images/5.jpg",
      techno: ["React", "Next", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/oussamadabachil/frontend-teewt",
        "https://github.com/oussamadabachil/backend-teewt",
        "https://frontend-teewt.vercel.app/",
      ],
    },
     {
      id: "12",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
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
  const [id, setId] = useState(6);

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
          <h4>{infosOtherProjets[id-6].titre}</h4>
          <div
            className={styles.contentModalLeftImage}
            style={{
              backgroundImage: `url(/background_images/${id}.jpg)`,
            }}
          ></div>
        </div>
        <div className={styles.contentModalRight}>
          <h4>Contexte</h4>
          <p>{infosOtherProjets[id-6].description}</p>
          <h4>Technologies utilisées</h4>
          <div className={styles.contentModalRightTechno}>
            {infosOtherProjets[id-6].techno.map((techno) => (
              <span>{techno}</span>
            ))}
          </div>
          <h4>Liens</h4>
          <div className={styles.contentModalRightLinks}>
            <a href={infosOtherProjets[id-6].link[0]} target="_blank">
              Voir le frontend
            </a>
            <a href={infosOtherProjets[id-6].link[1]} target="_blank">
              Voir le backend
            </a>
            <a
              href={infosOtherProjets[id-6].link[2]}
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
          <h4>Rappel Islam</h4>
          <p>{infosOtherProjets[0].description.substring(0, 80) + "..."}</p>

          <button onClick={handleClick} data-id="6">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="bbh.png" alt="projet 2" />
          <h4>Site Web garagiste</h4>
          <p>{infosOtherProjets[1].description.substring(0, 80) + "..."}</p>

          <button onClick={handleClick} data-id="7">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="toutoucare.png" alt="projet 2" />
          <h4>Application Toutoucare</h4>
          <p>
            <p>{infosOtherProjets[2].description.substring(0, 80) + "..."}</p>
          </p>
          <button onClick={handleClick} data-id="8">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="dragonballsuper_film.png" alt="projet 8" />
          <h4>Page d'affiches de film DB Super</h4>
          <p>{infosOtherProjets[3].description.substring(0, 80) + "..."}</p>
          <button onClick={handleClick} data-id="9">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="cloneig.png" alt="projet 2" />
          <h4>Site Clone Instagram</h4>
          <p>{infosOtherProjets[4].description.substring(0, 80) + "..."}</p>
          <button onClick={handleClick} data-id="10">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="mdl.png" alt="projet 2" />
          <h4>Site de réservations d'activités sportives</h4>
          <p>{infosOtherProjets[5].description.substring(0, 80) + "..."}</p>
          <button onClick={handleClick} data-id="11">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="portfolioapple.png" alt="projet 2" />
          <h4>Portfolio design Apple</h4>
          <p>{infosOtherProjets[6].description.substring(0, 80) + "..."}</p>
          <button onClick={handleClick} data-id="12">
            En savoir plus
          </button>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.mesProjets}>
          <img src="hg.png" alt="projet 2" />
          <h4>Design site e-commerce </h4>
          <p>{infosOtherProjets[7].description.substring(0, 80) + "..."}</p>
          <button onClick={handleClick} data-id="13">
            En savoir plus
          </button>
        </div>
      </Reveal>
    </>
  );
}
