import Head from "next/head";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect/dist/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Projets from "../components/Projets";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Animated } from "react-animated-css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import OtherProjets from "../components/OtherProjets";
import Reveal from "react-reveal/Reveal";
import { Navbar } from "../components/Navbar";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import Swal from "sweetalert2";

// CommonJS
import config from "react-reveal/globals";

export default function Home() {
  const Swal = require("sweetalert2");

  const [status, setStatus] = useState("");
  const [checkTest, setCheckTest] = useState(false);

  const [messageMess, setMessageMess] = useState("");
  const [messageButton, setMessageButton] = useState("Envoyer");
  const regexMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const [userMail, setUserMail] = useState("");
  const [userFullName, setUserFullName] = useState("");

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [userMessage, setUserMessage] = useState("");
  let styleDots = {
    opacity: 1,
    visibility: "visible",
    transition: "all .3s",
  };

  let boxMessStyle2 = {
    opacity: 0,
    visibility: "hidden",
    width: "1rem",
    height: "1rem",
    transition: "all .3s",
  };
  let styleMessM = {
    opacity: 0,
    visibility: "hidden",
    transition: "all .3s",
  };
  let buttonStyle = {
    cursor: "not-allowed",
  };

  const sendMessage = () => {
    if (
      userMail.match(regexMail) &&
      userMessage.length > 0 &&
      userFullName.length > 0
    ) {
      setMessageMess("Message envoyé");
      boxMessStyle2 = {
        width: "13rem",
        height: "3rem",
        opacity: 1,
        visibility: "visible",
        transition: "all .3s",
      };
    } else {
      alert("no");
    }
  };

  config({ ssrFadeout: true });

  const [seeMore, setSeeMore] = useState(false);

  const actionSeeMore = () => {
    setSeeMore(true);
  };

  let seeMoreProjets = {};
  if (seeMore) {
    seeMoreProjets = {
      display: "flex",
    };
  } else {
    seeMoreProjets = {
      display: "none",
    };
  }

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userMail.match(regexMail) &&
      userMessage.length > 0 &&
      userFullName.length > 0
    ) {
      setMessageMess("Message envoyé");
      boxMessStyle2 = {
        width: "13rem",
        height: "3rem",
        opacity: 1,
        visibility: "visible",
        transition: "all .3s",
      };

      let valuesObj = {
        userName: userFullName,
        userMail: userMail,
        userMessage: userMessage,
      };
      emailjs
        .send(
          "service_o9focop",
          "template_8bu2pef",
          valuesObj,
          "vYYfs8J7TWV1CxDQ9"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response);
            setStatus("SUCCESS");
            Swal.fire({
              title: "Parfait!",
              text: "Votre message a bien été envoyé",
              icon: "success",
              confirmButtonText: "Yeah",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            Swal.fire({
              title: "Aïe!",
              text: error,
              icon: "error",
              confirmButtonText: "Oups",
            });
          }
        );
    } else {
      Swal.fire({
        title: "Ah!",
        text: "Remplissez tous vos champs correctement",
        icon: "warning",
        confirmButtonText: "Ok !",
      });
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .typeString("Hello World!")
        .callFunction(() => {
          console.log("String typed out!");
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log("All strings were deleted");
        })
        .start();
    }}
  />;
  useEffect(() => {
    emailjs.init("service_o9focop");
  });

  if (
    userMail.match(regexMail) &&
    userMessage.length > 0 &&
    userFullName.length > 0
  ) {
    buttonStyle = {
      cursor: "pointer",
    };
    styleMessM = {
      opacity: 1,
      visibility: "visible",
      transition: "all .3s",
    };
    styleDots = {
      opacity: 0,
      visibility: "hidden",
      transition: "all .3s",
    };
  }

  if (messageMess == "Message envoyé") {
    boxMessStyle2 = {
      width: "13rem",
      height: "3rem",
      opacity: 1,
      visibility: "visible",
      transition: "all .3s",
    };
  }
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/OD.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />{" "}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Head>
      <main className={styles.main}>
        {/* <Navbar /> */}
        <Header />

        <section id="pres" className={styles.containertwo}>
          <Zoom>
            <figure>
              <img
                className={styles.imageHome}
                src="/oussama2.jpeg"
                alt="React Image"
              />{" "}
              <figcaption>
                <p>
                  Bonjour , je m’appelle Oussama Dabachil et je suis un
                  développeur passionné par le monde du développement .
                </p>
              </figcaption>
            </figure>
          </Zoom>

          <h3 className={styles.titleAccueil}>Mes formations</h3>

          <hr className={styles.horizontal}></hr>

          <div className={styles.containerFormation}>
            <Reveal effect="fadeInUp">
              <div className={styles.blockLeft}>
                <h4>
                  <span>Lieu</span>
                  <span>
                    {" "}
                    : La Capsule , 56 Boulevard Pereire , Levallois Perret
                  </span>
                </h4>
                <h4>
                  <span>Du </span>
                  <span> : 11/10/2022 </span>
                </h4>
                <h4>
                  <span>Jusqu’au </span>
                  <span>: 23/12/2022</span>
                </h4>
                <h4>
                  <span>Durée </span>
                  <span>: 10 semaines</span>
                </h4>
              </div>
            </Reveal>
            <Reveal effect="fadeInUp">
              <div className={styles.blockRight}>
                <h4>
                  <span>Nom de la formation</span>
                  <span> Titre RNCP 6 développeur web et web mobile</span>
                </h4>
                <h4>
                  <span>Résumé de la formation :</span>
                  <span>
                    Coding Bootcamp de 10 semaines - Développeur web et mobile
                    Fullstack JavaScript
                    <ul>
                      <li>
                        Conception et prototypage d’applications web et mobile
                      </li>
                      <li>
                        Programmation Front-end : HTML 5 / CSS / JavaScript /
                        React / Redux
                      </li>
                      <li>Programmation Back-end : Node.JS / Express</li>
                      <li>Base de données et CDN: Mongo DB / Cloudinary </li>
                      <li>Workflow : Git / Github </li>
                    </ul>
                  </span>
                </h4>
              </div>
            </Reveal>
          </div>
          <hr className={styles.horizontal}></hr>

          <div className={styles.containerFormation}>
            <Reveal effect="fadeInUp">
              <div className={styles.blockLeft}>
                <h4>
                  <span>Lieu</span>
                  <span>
                    {" "}
                    : ITIC Paris ,190bis Boulevard de Charonne, 75020 Paris
                  </span>
                </h4>
                <h4>
                  <span>Du </span>
                  <span> : 01/09/2020 </span>
                </h4>
                <h4>
                  <span>Jusqu’au </span>
                  <span>: 23/06/2022</span>
                </h4>
                <h4>
                  <span>Durée </span>
                  <span>: 2 années </span>
                </h4>
              </div>
            </Reveal>
            <Reveal effect="fadeInUp">
              <div className={styles.blockRight}>
                <h4>
                  <span>Nom de la formation</span>
                  <span> BTS SIO option SLAM</span>
                </h4>
                <h4>
                  <span>Résumé de la formation :</span>
                  <span>
                    <ul>
                      <li>
                        Apprentissage de langages Frontend tel que HTML CSS et
                        Javascript
                      </li>
                      <li>
                        Apprentissage de langages Backend tel que Java et PHP
                      </li>
                      <li>Apprentissage de SQL , Base de données</li>
                      <li>
                        Réalisation de sites dynamiques pour le projet de fin
                        d’années (HTML , CSS, Javascript et PHP){" "}
                      </li>
                      <li>Workflow : Git / Github </li>
                    </ul>
                  </span>
                </h4>
              </div>
            </Reveal>
          </div>
          <hr className={styles.horizontal}></hr>

          <div className={styles.containerFormation}>
            <Reveal effect="fadeInUp">
              <div className={styles.blockLeft}>
                <h4>
                  <span>Lieu</span>
                  <span>
                    {" "}
                    :IUT Cachan , 9 Av. de la Division Leclerc, 94230 Cachan
                  </span>
                </h4>
                <h4>
                  <span>Du </span>
                  <span> : 01/09/2019 </span>
                </h4>
                <h4>
                  <span>Jusqu’au </span>
                  <span>: 01/09/2020</span>
                </h4>
                <h4>
                  <span>Durée </span>
                  <span>: 1 année </span>
                </h4>
              </div>
            </Reveal>
            <Reveal effect="fadeInUp">
              <div className={styles.blockRight}>
                <h4>
                  <span>Nom de la formation</span>
                  <span>
                    {" "}
                    DUT Génie électrique et informatique industrielle (1 an){" "}
                  </span>
                </h4>
                <h4>
                  <span>Résumé de la formation :</span>
                  <span>
                    <ul>
                      <li>
                        Apprentissage de langages Frontend tel que HTML CSS et
                        Javascript
                      </li>
                      <li>Apprentissage de langages tel que le C et Python</li>
                      <li>
                        Apprentissage de logiciels tel que Kicad pour la
                        modélisation des cartes électroniques .
                      </li>
                      <li>Projet Robot suiveur de ligne</li>
                    </ul>
                  </span>
                </h4>
              </div>
            </Reveal>
          </div>
          <h3 id='comp'className={styles.titleAccueil}>Mes compétences</h3>
          <section className={styles.containerthree}>
            <div className={styles.containerCompetence}>
              <Reveal effect="fadeInLeft">
                <div className={styles.blockLeftSkills}>
                  <h4 className={styles.titleTypeSkills}>Frontend</h4>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className={styles.blockRightSkills}>
                  <ul>
                    <li>
                      HTML
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      CSS
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      JavaScript
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      React JS
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      React Native
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Redux
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Bootstrap
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Material UI
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Tailwind CSS
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className={styles.containerCompetence}>
              <Reveal effect="fadeInLeft">
                <div className={styles.blockLeftSkillsBackend}>
                  <h4 className={styles.titleTypeSkills}>Backend</h4>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className={styles.blockRightSkillsBackend}>
                  <ul>
                    <li>
                      Express JS
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Java
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      Node JS
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      PHP
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                  
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className={styles.containerCompetence}>
              <Reveal effect="fadeInLeft">
                <div className={styles.blockLeftSkills}>
                  <h4 className={styles.titleTypeSkills}>Database</h4>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className={styles.blockRightSkillsBackend}>
                  <ul>
                    <li>
                     GraphQL
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      MySQL
                      <span>
                        <hr className={styles.animatedHr}></hr>
                      </span>
                    </li>
                    <li>
                      MongoDB
                      <span>
                        <hr style={{

                          margin:'10px 0 20px'
                        }}className={styles.animatedHr}></hr>
                      </span>
                    </li>    
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
          <div className={styles.containerProjets}>
            <h3 id='proj'className={styles.titleAccueil2}>Mes projets</h3>
            <div className={styles.ProjetsContainer}>
              <div className={styles.mesProjetsContainer}>
                <Projets />
              </div>
              <div
              id="proj2"
                className={styles.mesProjetsContainer}
                style={seeMoreProjets}
              >
                <OtherProjets />
              </div>
              <a href="#proj2" className={styles.seeMoreProjets} onClick={actionSeeMore}>
                Voir d'autres projets
              </a>
            </div>
          </div>
        </section>

        <div className={styles.contactBox}>
          <div className={styles.boxMessage}>
            <div className={styles.col3}>
              <p style={styleMessM}>{messageMess}</p>
              <div style={styleDots} className={styles.dotFlashing}></div>
            </div>
          </div>

          {/* <div style={boxMessStyle2} className={styles.boxMessage2}>
            <div className={styles.col3}>
              <p style={styleMessM}>{messageMess}</p>
              <div style={styleDots} className={styles.dotFlashing}></div>
            </div>
          </div> */}

          <h2 id='cont'>Me contacter</h2>
          <Reveal effect="fadeInUp">
            <form className={styles.flexContactBox} onSubmit={handleSubmit}>
              <label>Votre nom complet</label>

              <input
                onChange={(e) => {
                  setUserFullName(e.target.value);
                }}
                className={styles.inputContact}
                placeholder="Insérer votre nom complet"
              />
              <label>Votre adresse-mail</label>
              <input
                onChange={(e) => {
                  setUserMail(e.target.value);
                }}
                name="email"
                type="email"
                className={styles.inputContact}
                placeholder="Insérer votre adresse-mail"
              />
              <label>Votre message</label>
              <textarea
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
                placeholder="Insérer votre message"
              />
              <input type="submit" value="Envoyer" />
            </form>
          </Reveal>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
