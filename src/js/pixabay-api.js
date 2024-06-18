const API = {
  PIXABAY: {
    PATH: 'https://pixabay.com/api/',
    KEY: '44444020-42ceddb875011e5970bd122af',
  },
};

export const fetchImages = async (searchQuery, page) => {

  const params = new URLSearchParams({
    key: API.PIXABAY.KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(API.PIXABAY.PATH + '?' + params.toString());
};