// import {API} from '../../backend';
const API = "https://mern-e-commerce-webapp.herokuapp.com/api"

export const createOrder = (userId, token, orderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: orderData })
    }).then(response => {
        return response.json()
    })
        .catch(error => console.log(error))
}