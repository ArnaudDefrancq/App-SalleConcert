import Style from "./Event.module.css"

const Event = ({idSalle, artiste, prix, style, date}) => {

    const dateObject = new Date(date);

    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("fr-FR", options);

    return ( 
    <>
        <div className={Style.div}>
            <p className={Style.p}><strong>{artiste}</strong></p>
            <p className={Style.p}>{prix} €</p>
            <p className={Style.p}>style : {style}</p>
            <p className={Style.p}>{formattedDate}</p>
        </div>
    </>
     );
}
 
export default Event;