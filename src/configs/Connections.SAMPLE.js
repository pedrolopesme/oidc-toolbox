export const Connections = [
    {
        name: "My Server One",
        connection: {
            authority: "https://myoidc.com",
            client_id: "my-client",
            redirect_uri: "http://localhost:8080/redirect",
            post_logout_redirect_uri: "http://localhost:8080/logout",
            response_type_code: true,
            response_type_token: false,
            response_type_id_token: true,
            scope: "openid tester",
            filterProtocolClaims: true,
            loadUserInfo: true
        }
    }
]; 