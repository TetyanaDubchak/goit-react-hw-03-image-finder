import axios from "axios";

const apiKey = '38155238-6cbc32329127063edf5d1a6f9'

export const fetchImages = async (value) => {
    const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${value}`);
    return response.data
}