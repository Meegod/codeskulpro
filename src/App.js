import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PlaylistForm from './components/PlaylistForm';
import Playlist from './components/Playlist';

function App() {
  //This project explain the concept of lifting up state..
  const [list, setList] = useState([
    {
      title: 'The Twist',
      artist: 'Chubby Checker',
      notes: 'Great dance!',
      submitter: 'Top40Weekly'
    },
    {
      title: 'Smooth',
      artist: 'Santana ft. Rob Thomas',
      notes: 'From Matchbox 20 to Matchbox Sunny',
      submitter: 'Top40Weekly'
    },
    {
      title: 'Mack The Knife',
      artist: 'Bobby Darin',
      notes: "Guess who's back in town?",
      submitter: 'Top40Weekly'
    }
  ]);
  return (
    <div>
      <Navbar />
      <PlaylistForm setList={setList} />
      <Playlist list={list} />
    </div>
  );
}
export default App;
