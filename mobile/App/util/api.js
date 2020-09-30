const BASE_URL = 'http://192.168.1.67:3000';

export const geoFetch = (path, options = {}) => {
    return fetch(`${BASE_URL}/api${path}`, options)
        .then(res => {
            if (res.ok) return res.json();

            throw new Error('Something went wrong... please try again.');
        });
}