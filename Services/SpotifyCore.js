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

  return await fetch(
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

export const ArtistSpotify = async (access_token, globalArtistId) => {
  //const { access_token } = await getAccessToken();
  return fetch(`https://api.spotify.com/v1/artists/${globalArtistId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async (access_token, globalArtistId) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${globalArtistId}/top-tracks?` +
      new URLSearchParams({ market: "US" }),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await response.json();
  return data.tracks;
};

export const getRelatedArtists = async (access_token, globalArtistId) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${globalArtistId}/related-artists`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await response.json();
  return data.artists;
};

export const SearchSpotify = async (access_token, query) => {
  const response = await fetch(
    "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        q: query,
        type: ["artist", "playlist", "track"],
      }),
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await response.json();

  return data;
};
