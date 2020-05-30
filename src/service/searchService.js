const baseUrl = "https://api.spotify.com/v1";

const callApi = (endpoint, options = {}) => {
  const token = localStorage.getItem("auth");
  options.headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const url = baseUrl + endpoint;
  return fetch(url, options).then((resp) => resp.json().then((data) => data));
};

const api = {
  spotify: {
    getArtists: (query) => callApi(`/search?q=${query}&type=artist`),
    getArtist(artistId) {
      return callApi(`/artists/${artistId}`);
    },
    getArtistAlbums(id) {
      return callApi(`/artists/${id}/albums`);
    },
    getAlbum(albumId) {
      return callApi(`/albums/${albumId}`);
    },
    getAlbumTracks(albumId) {
      return callApi(`/albums/${albumId}/tracks`);
    },
  },
};
export default api;
