import axios from 'axios';

const apiUrl = "https://coronavirus-19-api.herokuapp.com/";


export default axios.create({
    baseURL: apiUrl
})