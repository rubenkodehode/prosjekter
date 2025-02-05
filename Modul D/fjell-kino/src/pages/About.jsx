import styles from "../styles/About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Om oss</h1>
      <div className={styles.content}>
        <img
          src="../src/assets/images/cinema.jpg"
          alt="Fjell Kino"
          className={styles.cinemaImage}
        />
        <p>
          Fjell Kino er en kulturell perle som ligger sentralt i Fjell, og
          fungerer som et samlingspunkt for både lokale innbyggere og besøkende.
          Kinoen er kjent for å tilby en førsteklasses filmopplevelse, med
          moderne fasiliteter som sikrer at hver visning er av høyeste kvalitet.
          De romslige salene er utstyrt med toppmoderne lyd- og bildesystemer,
          noe som gjør at publikum kan nyte de nyeste filmene slik de er ment å
          bli sett.
        </p>
        <p>
          Fjell Kino legger stor vekt på fellesskap og kvalitet, og dette
          gjenspeiles i deres varierte program som inkluderer alt fra store
          Hollywood-blockbustere til mindre, uavhengige filmer. Kinoen er et
          sted hvor filmelskere kan samles for å dele opplevelser og diskutere
          filmer i en hyggelig atmosfære.
        </p>
        <p>
          I tillegg til filmvisninger, arrangerer Fjell Kino jevnlig
          spesialarrangementer som filmfestivaler, temakvelder og
          barneforestillinger, noe som gjør det til et dynamisk og levende
          kulturhus. Dette bidrar til å styrke det lokale kulturlivet og gir
          publikum muligheten til å oppleve film på en ny og engasjerende måte.
        </p>
        <p>
          For de som ønsker å besøke Fjell Kino, ligger den lett tilgjengelig på
          <strong> Fjellavegen 5357</strong>. Dersom du har spørsmål eller
          ønsker å vite mer om programmet, kan du enkelt kontakte dem via e-post
          på
          <strong> kontakt@fjellkino.no</strong>. Enten du er en ivrig
          filmfanatiker eller bare ønsker en hyggelig kveld ute, er Fjell Kino
          det perfekte stedet å besøke.
        </p>
      </div>
    </div>
  );
};
