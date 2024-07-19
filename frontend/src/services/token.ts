import axios from 'axios';
import { baseApiUri } from '../api/model';

export const tokenService = async (token: string) => {
    return await axios.get(baseApiUri + `/users/auth`, {
        headers: {
            authorization: 'Bearer: ' + token,
        },
    });
};
