import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login", payload);
}

export function getUser() {
    return Axios.get("user");
}

export const authService = {
    doLogin,
    getUser
};
