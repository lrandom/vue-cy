import {Axios} from "./Axios";

export function getHome() {
    return Axios.get("home");
}


export const homeService = {
    getHome
};
