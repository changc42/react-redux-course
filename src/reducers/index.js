import { combineReducers } from "redux";

const selectedSongReducer = (oldSong = null, action) => {
  if (action.type === "SELECT_SONG") return action.payload;
  return oldSong;
};

const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "Fireworks", duration: "3:22" },
    { title: "I like it", duration: "2:43" }
  ];
};

export default combineReducers({
  selectedSong: selectedSongReducer,
  songs: songsReducer
});
