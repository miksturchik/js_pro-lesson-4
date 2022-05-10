import { FC, useState } from "react";
import idCard from "./img/hi.jpg";

const Login: FC = () => {
    const [loggedIn, setLoggedln] = useState<boolean>(false);

    const onClick = (): void => {
        setTimeout(() => {
            setLoggedln(!loggedIn);
        }, 2000);
    };

    return loggedIn ? (
        <img src={idCard} alt="" />
    ) : (
        <button className="login_btn" onClick={onClick}>
            Sign in
        </button>
    );
};

export default Login;
