import axios from 'axios';

const baseURL = 'https://localhost:7443';

export const api = async (url: string) => {
    return await axios.get(baseURL + url);
};
