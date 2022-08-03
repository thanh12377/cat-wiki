import axios from "axios";

export const getAllBreed = () =>{
    return axios.get("https://api.thecatapi.com/v1/breeds")
}

export const getParamsBreed = (params) =>{
    return axios.get(`https://api.thecatapi.com/v1/breeds?${params}`)
}

export const getBreedById = (id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=9`);
}
