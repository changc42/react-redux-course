import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

export default function App() {
  return (
    <div className="ui container grid">
      <div className="ui container row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="cloumn eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
