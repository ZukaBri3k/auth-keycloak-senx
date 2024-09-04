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

        //Version alternative en fetchant un token depuis l'api
        /* async function login() {
            const client = await fetch(
                "https://auth.senx.io/realms/kwh50/protocol/openid-connect/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        client_id: "saas",
                        username: "kyrill.dumerchat@kwh50.io",
                        password: "k8?GtA9Kj$RQqndacckE",
                        grant_type: "password",
                    }),
                }
            );

            return client.json();
        }

        login().then((res) => console.log(res)); */
    }, []);

    return isLogged;
}
