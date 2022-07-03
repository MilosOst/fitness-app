import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

function Protected({ children }) {
    const {user} = UserAuth();

    if (!user) {
        return (<Navigate to='/signin' />);
    }

    return children;
}

export default Protected;