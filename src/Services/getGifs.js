const apikey = '2iy97hLbp0XRhNwmEe4N1mxZJhFZ5ExU';

export async function getGifs(query) {
  const API_GIPHY = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10&offset=0&rating=G&lang=en`;
  const response = await fetch(API_GIPHY);
  const { data } = await response.json();

  // get only I need of API
  const gifs = data.map(item => {
    const { id, images, title } = item;
    const { url } = images.downsized_medium
    return { id, url, title };
  })
  return gifs;
}
export async function getOneGif(id) {
  const API_GIPHY = `https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}`;
  const response = await fetch(API_GIPHY);
  const { data } = await response.json();
  return data
}