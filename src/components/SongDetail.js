import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    <div>
      <div>Song detail</div>
      {selectedSong ? (
        <div>
          <div>title: {selectedSong.title}</div>
          <div>duration: {selectedSong.duration}</div>
        </div>
      ) : (
        <div>nothing selected</div>
      )}
    </div>
  );
};

let mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
