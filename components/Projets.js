import styles from "../styles/Home.module.css";
export default function Projets() {
  return (
    <>
      <div className={styles.mesProjets}>
        <img src="/twitterpngWhite.jpg" alt="projet 1" />
        <h4>Clone de Twitter</h4>
        <p>
         Dans le cadre de notre projet , nous avons réalisé un clone de Twitter en seulement 2 jours.
        </p>
        <button>En savoir plus</button>
      </div>
      <div className={styles.mesProjets}>
      <img src="tickethackpngWhite.jpg" alt="projet 2" />
        <h4>Site de billetterie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button>En savoir plus</button>
      </div>
      <div className={styles.mesProjets}>
        <img src="oussflixpng.jpg" alt="projet 2" />
        <h4>Site d'informations
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button>En savoir plus</button>
      </div>
      <div className={styles.mesProjets}>
      <img src="oussflixpng.jpg" alt="projet 2" />
        <h4>Site d'affiches de films</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <button>En savoir plus</button>
      </div>
    </>
  );
}
