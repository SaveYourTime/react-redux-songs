import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div className="card-body">
        <h6 className="card-title text-muted">Please select a song.</h6>
      </div>
    )
  }
  return (
    <div className="card-body">
      <h5 className="card-title mb-4">Now Playing...</h5>
      <h6 className="text-secondary">Title: {selectedSong.title}</h6>
      <h6 className="text-secondary">Duration: {selectedSong.duration}</h6>
    </div>
  );
}

const mapStateToProps = ({ selectedSong }) => ({ selectedSong });

export default connect(mapStateToProps)(SongDetail);
