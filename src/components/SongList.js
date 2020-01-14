import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const renderSongs = (props) => {
  const { songs, selectSong } = props;

  return songs.map((song) => {
    const { title } = song;
    return (
      <li className="list-group-item d-flex align-items-center" key={title}>
        <span className="mr-auto">{title}</span>
        <button type="button" className="btn btn-primary float-right" onClick={() => { selectSong(song) }}>Select</button>
      </li>
    )
  });
}

const SongList = (props) => {
  return (
    <ul className="list-group list-group-flush">{renderSongs(props)}</ul>
  );
}

const mapStateToProps = ({ songs }) => ({ songs });

export default connect(mapStateToProps, { selectSong })(SongList);
