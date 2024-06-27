const uriFromEnv = process.env.REACT_APP_API_URI;

const baseLocalUri = 'http://localhost:5001';

export const baseApiUri =  uriFromEnv || baseLocalUri;