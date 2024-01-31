import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import About from "./aPropos/About";
import Carte from "./carte/Carte";
import Calendrier from "./calendrier/Calendrier";
import Avis from './avis/Avis';
import Event from "./event/Event";
import style from './Details.module.css'

const Details = () => {

    const [salle, setSalle] = useState([]);
    var { id } = useParams();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/id?id=${id}`)
            .then((res) => setSalle(res.data))
            .catch((err) => console.log(err + "Pas de salle"))
    }, [])

    return ( 
    <>
        <h2 className={style.h2}>{salle.nom}</h2>
        <section className={style.section}>
             <About {...salle} /> 
        </section>
        <section>
            <Carte />
        </section>
        <section>
            <Calendrier />
        </section>
        <section>
            <Avis />
        </section>
        <section>
            <Event />
        </section>

    </> );
}
 
export default Details;