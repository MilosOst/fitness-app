import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";
import styles from "../styles/signIn.module.css";


function SignIn() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error){
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/');
        }
    }, [user]);


    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <GoogleButton onClick={handleSignIn} />
        </div>
    );
}

export default SignIn;