export const SELECT_SONG = 'SELECT_SONG';

export const selectSong = (song) => {
  return {
    type: SELECT_SONG,
    payload: song
  }
}
