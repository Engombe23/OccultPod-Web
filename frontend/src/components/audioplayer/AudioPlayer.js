import React, { useEffect, useRef, useState } from 'react'
import './AudioPlayer.css';

function AudioPlayer({audioSrc}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // Function to seek to a specific time
  function handleSeek(e) {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  }

  //Function to update current time and duration of the audio
  function handleTimeUpdate(){
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }

  // Function to play audio
  function handlePlay(){
    audioRef.current.play();
    setIsPlaying(true);
  }

  //function to pause audio
  function handlePause(){
    audioRef.current.pause();
    setIsPlaying(false);
  }

  // Function for Play/Pause handling
  function handlePlayPause(){
    if(isPlaying){
      handlePause();
    } else {
      handlePlay();
    }
  }

  //Format duration of audio in mm:ss format
  function formatDuration(durationSeconds){
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  // Use an effect to listen for 'timeupdate' events from the audio element
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate); 
  }, []);

  return (
    <div>
      {/* Input range for seeking within the audio track */}
      <input type='range' min={0} max={duration} value={currentTime} onChange={handleSeek}/>

      {/* The <audio> element for playing the audio. */}
      <audio ref={audioRef} src={audioSrc}/>

      {/* Display current & tital duration of the track. */}
      <div className='track-duration'>
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      {/* Play/Pause button */}
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause": "Play"}
      </button>
    </div>
  )
}

export default AudioPlayer
