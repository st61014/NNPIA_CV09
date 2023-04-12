import React, {useEffect, useState} from "react";
import './Header.css';
import {useAppDispatch} from "../../app/hooks";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    return <div className="header">
        <button onClick={clickHandle}>Přihlásit se</button>
    </div>
};

export default Header;