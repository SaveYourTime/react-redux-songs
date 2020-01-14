import { combineReducers } from 'redux';
import { SELECT_SONG} from '../actions';
import songs from '../const/songs';

const songsReducer = () => {
  return songs;
}

const selectedSongReducer = (selectedSong = null, action) => {
  const { type, payload } = action;
  if (type === SELECT_SONG) {
    return payload;
  }
  return selectedSong;
}

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });
