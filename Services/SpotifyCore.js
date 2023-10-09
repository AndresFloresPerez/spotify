export const albumsSpotify = async (access_token) => {
  //const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const SongInfoSpotify = async (access_token, trackId) => {
  //const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const CurrentlyPlayingSpotify = async (access_token) => {
  //const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const CurrentlyPlaySpotify = async (access_token, uri = null) => {
  //const { access_token } = await getAccessToken();
  if (uri != null) {
    return fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        uris: [uri],
      }),
    });
  } else {
    return fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
};

export const CurrentlyPauseSpotify = async (access_token) => {
  //const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/pause", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const featuredSpotify = async (access_token) => {
  //const { access_token } = await getAccessToken();

  return fetch(
    "https://api.spotify.com/v1/browse/featured-playlists?" +
      new URLSearchParams({
        country: "US",
      }),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};
