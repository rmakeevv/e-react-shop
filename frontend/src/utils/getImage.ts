import { baseApiUri } from '../api/model';

export const getImage = (src: string): string => baseApiUri + `/images/${src}`;
