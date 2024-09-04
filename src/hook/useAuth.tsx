import Keycloak from "keycloak-js";
import React, { useEffect } from "react";

export default function useAuth() {
    const [isLogged, setIsLogged] = React.useState(false);

    useEffect(() => {
        const client = new Keycloak({
            url: "https://auth.senx.io/",
            realm: "kwh50",
            clientId: "saas",
        });

        client.init({ onLoad: "login-required", redirectUri: "http://localhost:3000/private" }).then((res) => setIsLogged(res));
    }, []);

    return isLogged;
}
