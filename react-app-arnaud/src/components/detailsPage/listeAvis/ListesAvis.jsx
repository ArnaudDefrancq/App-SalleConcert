import PropTypes from 'prop-types';
import Avis from './avis/Avis';
import style from './ListeAvis.module.css'

const ListesAvis = ({listeAvis}) => {
    return ( 
    <>
        <div className={style.div}>
            {
                !listeAvis ? 
                (
                    <p>Aucun avis disponible</p>
                ) : 
                (
                    listeAvis.map((avis, index) => {
                        return  <Avis key={index} {...avis}/>
                    })
                )
            }
        </div>

        <div className={style.divBtn}>
            <button className={style.btn}>Ajouter Avis</button>
        </div>
    </> );
}
ListesAvis.propTypes = {
    listeAvis: PropTypes.array.isRequired 
};
 
export default ListesAvis;