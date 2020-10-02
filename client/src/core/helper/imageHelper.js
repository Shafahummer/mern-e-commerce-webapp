import React from 'react';
// import {API} from '../../backend'

const API = "https://mern-e-commerce-webapp.herokuapp.com/api"

const ImageHelper = ({ product }) => {
    const imageUrl = product ? `${API}/product/photo/${product._id}` : 'https://media.istockphoto.com/photos/gadsisar-sagar-lake-in-jaisalmer-rajasthan-sunrise-at-gadsisar-sagar-picture-id1222290004'
    console.log("image url---->", product)
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageUrl}
                alt="photo"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
}
export default ImageHelper;