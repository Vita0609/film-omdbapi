import axios from "axios";
// http://www.omdbapi.com/?apikey=[yourkey]&
//axios.defaults.baseURL = "http://www.omdbapi.com/"
// axios.defaults.headers['X-API-KEY'] = '80f72509';

export const getImagesService = async(query) => {
    const {data} = await axios(`http://www.omdbapi.com/?apikey=80f72509&s=${query}`)
    return data
}

export const getImageByIdService = async(id) => {
    const {data} = await axios(`http://www.omdbapi.com/?apikey=80f72509&i=${id}`)
    return data
}