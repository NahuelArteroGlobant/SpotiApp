const token = localStorage.getItem("auth");
const Header = { Authorization: "Bearer " + token };
//
export const GetArtists = async (query) => {
  const artistEndpoint = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=artist`,
    {
      headers: Header,
    }
  );

  const artistList = await artistEndpoint.json();
  artistList &&
    window.localStorage.setItem("artistList", JSON.stringify(artistList));
  //console.log("artistList : ", artistList.artists.items);
};

export const GetArtistAlbum = async (id) => {
  const artistEndpoint = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: Header,
    }
  );

  const artistAlbums = await artistEndpoint.json();

  window.localStorage.setItem("artistAlbums", JSON.stringify({ artistAlbums }));
};

export const GetArtistProfile = async (id) => {
  const artistEndpoint = await fetch(
    `https://api.spotify.com/v1/artists/${id}`,
    {
      headers: Header,
    }
  );

  const artist = await artistEndpoint.json();
  artist && window.localStorage.setItem("artist", JSON.stringify({ artist }));
};

export const GetAlbum = async (id) => {
  const artistEndpoint = await fetch(
    `https://api.spotify.com/v1/albums/${id}`,
    {
      headers: Header,
    }
  );

  const albums = await artistEndpoint.json();
  window.localStorage.setItem("albums", JSON.stringify(albums));
};

export const GetAlbumTracks = async (id) => {
  const artistEndpoint = await fetch(
    `https://api.spotify.com/v1/albums/${id}/tracks`,
    {
      headers: Header,
    }
  );

  const albumTracks = await artistEndpoint.json();
  albumTracks &&
    window.localStorage.setItem("albumTracks", JSON.stringify({ albumTracks }));
};
