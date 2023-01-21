import styles from "../styles/Home.module.css";
import styleAnimation from "../styles/AB.module.css";
import Reveal from "react-reveal/Reveal";
import config from "react-reveal/globals";
import { Animated } from "react-animated-css";

export default function Header() {
  config({ ssrFadeout: true });
  return (
    <>
      <section className={styles.container}>
        <div className={styleAnimation.area}>
          <ul className={styleAnimation.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.contentLeft}>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <h1 className={styles.title}>Oussama Dabachil</h1>
            <h2 className={styles.subtitle}>
              Développeur FullStack Javascript
            </h2>
          </Animated>

          <ul>
            <li>Mes formations</li>
            <li>Mes compétences</li>
            <li>Mes projets</li>
            <li>Me contacter</li>
          </ul>
        </div>
        <div className={styles.contentRight}>
          <Animated animationIn="fadeInRight" isVisible={true}>
            <img
              className={styles.image}
              src="/oussama2.jpeg"
              alt="React Image"
            />
          </Animated>
        </div>
      </section>
    </>
  );
}
