import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import About from "./aPropos/About";
import Carte from "./carte/Carte";
import Calendrier from "./calendrier/Calendrier";
import ListeAvis from "./listeAvis/ListesAvis";
import style from "./Details.module.css";
import ListeEvent from "./listeEvent/ListeEvent";

const Details = () => {
  const [salle, setSalle] = useState([]);
  const [event, setEvent] = useState([]);
  var { id } = useParams();

  let arrayEvent = [];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/id?id=${id}`)
      .then((res) => setSalle(res.data))
      .catch((err) => console.log(err + "Pas de salle"));
  }, []);

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_REACT_APP_API_URL}Event`)
    .then((res) => {
        arrayEvent = res.data.filter((e) => e.idSalle == id);
        setEvent(arrayEvent);
    })
    .catch((err) => console.log(err + "Pas de event"));
  }, [])

  return (
    <>
      <h2 className={style.h2}>{salle.nom}</h2>
      <section className={style.section}>
        <About {...salle} />
      </section>
      <section className={style.sectionCarte}>
        <Carte {...salle} />
      </section>
      <section className={style.sectionCalendrier}>
        <Calendrier />
      </section>
      <section className={style.sectionCalendrier}>
        <h2 className={style.categorie}>Avis</h2>
        {salle.listeAvis ? (
          <ListeAvis listeAvis={salle.listeAvis} />
        ) : (
          <p>Aucun avis disponible</p>
        )}
      </section>
      <section className={style.sectionCalendrier}>
        <h2 className={style.categorie}>Evenements</h2>
        <ListeEvent event={event}/>
      </section>
    </>
  );
};

export default Details;
