import axios from "axios";

const MY_API_KEY = '38155238-6cbc32329127063edf5d1a6f9';
const URL = 'https://pixabay.com/api/';

export const fetchImages = async (valueName, pageValue) => {
    const cutValue = valueName.split('/');
    const search = cutValue[1];
    const response = await axios.get(`${URL}?q=${search}&page=${pageValue}&key=${MY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
}

