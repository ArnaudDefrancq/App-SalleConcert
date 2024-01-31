import Event from "./event/Event";

// eslint-disable-next-line react/prop-types
const ListeEvent = ({event}) => {

    return ( 
    <>  
        {
            // eslint-disable-next-line react/prop-types
            event && event.map((e, index) => {
                return <Event key={index} {...e} />
            })
        }
    </>);
}
 
export default ListeEvent;