import axios from "axios";

const apiKey = '38155238-6cbc32329127063edf5d1a6f9'

export const fetchImages = async (valueName) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${valueName}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
}

