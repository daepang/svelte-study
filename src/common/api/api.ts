import axios from 'axios';

const baseURL = '';

export const api = async (url: string) => {
    return await axios.get(baseURL + url);
};
