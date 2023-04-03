const BASE_API_URL = '../data.json';
// eslint-disable-next-line import/prefer-default-export
export const useFetch = {
  get: async () => {
    const path = BASE_API_URL;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const respond = await useFetch(path);
    const json = await respond.json();
    return json;
  },
};
