import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";
import { useState } from "react";
import config from "react-reveal/globals";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose, faGift, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function OtherProjets() {
  let infosOtherProjets = [
    {
      id: "6",
      titre: "Application Rappel Islam",
      description:
        "Rappel Islam est ma première application faite en Swift .Elle permet de nous rappeler de notre Créateur , on y trouve  des rappels écrits et audio et vous aurez droit à des notifications qui vous rappeleront le Créateur .",
      image: "/background_images/2.jpg",
      techno: ["Swift Storyboard"],
      link: ["https://apps.apple.com/fr/app/rappel-islam/id1551535646"],
    },
    {
      id: "7",
      titre: "Site vitrine garagiste",
      description:
        "J'ai conçu ce site pour un garagiste et puis hébergé chez Hostinger .",

      image: "/background_images/3.jpg",
      techno: ["HTML", "CSS", "Javascript"],
      link: [
        "https://github.com/oussamadabachil/bbhpieceautofinal",
        "http://www.bbhlacourneuve.com/",
      ],
    },
    {
      id: "7",
      titre: "Application Toutoucare",
      description:
        "Dans le cadre de la semaine de projet , nous avons réalisé avec mon équipe l'application Toutoucare . Cette application permet à des propriétaires de chiens d'inscrire leur chien dans une crèche spécialisée . On peut réserver à l'horaire que vous voulez , accéder et télécharger nos factures ",
      image: "/background_images/4.jpg",

      techno: ["React Native", "Expo", "MongoDb", "Express", "NodeJs", "TDD"],
      link: [],
    },
    {
      id: "8",
      titre: "Site d'affiches de films",
      description:
        "Cette page web présente le film Dragon Ball Super : Broly . On y trouve des moments cultes et épiques du film ",
      image: "/background_images/5.jpg",
      techno: ["HTML", "CSS", "Javascript"],
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
        "Ce site est un clone de la page de connexion Instragram . Une fois connectés , on y trouve un message de bienvenue ",
      image: "/background_images/5.jpg",
      techno: ["HTML", "CSS", "Javascript"],
      link: [
        "https://github.com/oussamadabachil/pagedecoinsta",
        "https://oussamadabachil.github.io/pagedecoinsta/",
      ],
    },
    {
      id: "10",
      titre: "Site de réservations d'activités sportives",
      description:
        "Ce site permet aux personnes de s'inscrire et de pouvoir consulter des activités sportives . Ils peuvent aussi réserver leur séances mais aussi consulter leur profil et leurs réservations .",
      image: "/background_images/5.jpg",
      techno: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      link: [
    
      ],
    },
    {
      id: "11",
      titre: "Portfolio design Apple",
      description:
        " Il s'agit de l'un de mes premiers portfolios, car j'en ai créé beaucoup auparavant. Pour celui-ci, j'ai pris un peu d'inspiration du site web d'Apple.",
      image: "/background_images/5.jpg",
      techno: ["HTML", "CSS", "Javascript"],
      link: [
        "https://github.com/oussamadabachil/portfolio_apple_od",

        "https://oussamadabachil.github.io/portfolio_apple_od/"

      ],
    },
    {
      id: "12",
      titre: "Design site e-commerce",
      description:
        "J'ai intégré une maquette dans le site en utilisant (from scratch) et aussi créé le menu mobile sur le site (bien sur from scratch)",
      image: "/background_images/5.jpg",
      techno: ["HTML", "CSS", "Javascript", "Prestashop"],
      link: [
        "https://github.com/oussamadabachil/maquetteholyjanvier/settings/pages",
        "https://oussamadabachil.github.io/maquetteholyjanvier/",

      ],
    },
  ];

  //condition

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
          <h4>{infosOtherProjets[id - 6].titre}</h4>
          <div
            className={styles.contentModalLeftImage}
            style={{
              backgroundImage: `url(/background_images/${id}.jpg)`,
            }}
          ></div>
        </div>
        <div className={styles.contentModalRight}>
          <h4>Contexte</h4>
          <p>{infosOtherProjets[id - 6].description}</p>
          <h4>Technologies utilisées</h4>
          <div className={styles.contentModalRightTechno}>
            {infosOtherProjets[id - 6].techno.map((techno) => (
              <span>{techno}</span>
            ))}
          </div>
          <h4>Liens</h4>
          <div className={styles.contentModalRightLinks}>
            {infosOtherProjets[id - 6].link.length == 0 ? (
              <button>Pas encore de lien 😖</button>
            ) : infosOtherProjets[id - 6].link.length == 1 ? (
              <a href={infosOtherProjets[id - 6].link[0]} target="_blank">
               Lien vers la page
              </a>
            ) : infosOtherProjets[id - 6].link.length == 2 ? (
              <>
                <a href={infosOtherProjets[id - 6].link[0]} target="_blank">
                  Voir sur github
                </a>
                <a
                  href={infosOtherProjets[id - 6].link[1]}
                  target="_blank"
                  className={styles.goToWeb}
                >
                  <FontAwesomeIcon
                    className={styles.iconGoToWeb}
                    icon={faGlobe}
                  ></FontAwesomeIcon>
                  Voir le site
                </a>
              </>
            ) : (
              <>
                <a href={infosOtherProjets[id - 6].link[0]} target="_blank">
                  Lien vers FrontEnd
                </a>
                <a href={infosOtherProjets[id - 6].link[1]} target="_blank">
                  Lien vers BackEnd
                </a>
                <a
                  href={infosOtherProjets[id - 6].link[2]}
                  target="_blank"
                  className={styles.goToWeb}
                >
                  <FontAwesomeIcon
                    className={styles.iconGoToWeb}
                    icon={faGlobe}
                  ></FontAwesomeIcon>
                  Voir le site
                </a>
              </>
            )}
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
