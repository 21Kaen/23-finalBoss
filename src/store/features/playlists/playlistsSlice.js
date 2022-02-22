import { Plumbing } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },

    addPlaylist: (state, action) => {
      state.playlists = [action.payload, ...state.playlists];
    },

    addTracksToPlaylist: (state, action) => {
      console.log(action);
      state.playlists = state.playlists.map((pl) =>
        pl.id === action.payload.id
          ? { ...pl, tracks: action.payload.tracks }
          : pl
      );
    },

    addTrack: (state, action) => {
      console.log(action);
      const playlistIndex = state.playlists.findIndex(
        (pl) => pl.id === action.payload.id
      );
      state.playlists[playlistIndex].tracks = [
        action.payload.track,
        ...state.playlists[playlistIndex].tracks,
      ];
    },

    deleteTrack: (state, action) => {
      const playlistIndex = state.playlists.findIndex(
        (pl) => pl.id === action.payload.id
      );
      state.playlists[playlistIndex].tracks = state.playlists[
        playlistIndex
      ].tracks.filter((track) => track.id !== action.payload.trackID);
    },
  },
});

export const {
  setPlaylists,
  addTracksToPlaylist,
  addTrack,
  deleteTrack,
  addPlaylist,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
