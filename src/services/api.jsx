import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:5001'
    baseURL:'https://apilistbooks.azurewebsites.net/books'
});