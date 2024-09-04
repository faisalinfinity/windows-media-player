import React, { useState, useEffect } from 'react';
import MediaPlayer from './components/MediaPlayer';
import Playlist from './components/Playlist';
import Controls from './components/Controls';
import './styles/App.css';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    window.electron.onMediaControl((event, action) => {
      // Handle media control actions
      switch (action) {
        case 'play':
          // Play logic
          break;
        case 'pause':
          // Pause logic
          break;
        case 'next':
          // Next track logic
          break;
        case 'previous':
          // Previous track logic
          break;
        default:
          break;
      }
    });
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newTrack = {
        name: file.name,
        path: URL.createObjectURL(file)
      };
      setPlaylist([...playlist, newTrack]);
      if (!currentTrack) {
        setCurrentTrack(newTrack);
      }
    }
  };

  return (
    <div className="app">
      <h1>Windows Media Player Clone</h1>
      <input type="file" onChange={handleFileSelect} accept="audio/*,video/*" />
      <MediaPlayer currentTrack={currentTrack} />
      <Controls />
      <Playlist playlist={playlist} setCurrentTrack={setCurrentTrack} />
    </div>
  );
}

export default App;