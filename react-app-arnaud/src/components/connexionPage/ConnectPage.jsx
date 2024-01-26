import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

const ConnectPage = () => {

    // Permet de changer le form (signIn/SignUp)
    const [modal,setModal] = useState(false);

    const handelClick = () => {
        if (modal) {
            setModal(false)
        } else {
            setModal(true)
        }
    }

    return (  
    <>
    <section>
        <div>
            <button onClick={handelClick}>Inscription</button>
            <button onClick={handelClick}>Connection</button>
        </div>
        <div>
            { modal ? <SignIn /> : <SignUp /> }
        </div>
    </section>
    </>
    );
}
 
export default ConnectPage;