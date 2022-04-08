import {Axios} from "./Axios";
import {getHome} from "./homeService";

export function getProductDetail(id) {
    return Axios.get("product/"+id);
}

export const productService = {
    getProductDetail
};
