// import {API} from '../../backend';
const API = "https://mern-e-commerce-webapp.herokuapp.com/api"

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}