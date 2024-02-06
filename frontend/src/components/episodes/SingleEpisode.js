import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import moment from 'moment';
import AudioPlayer from '../audioplayer/AudioPlayer';

function SingleEpisode() {
  const {image, title, link, pubDate, duration, description} = useLoaderData();
  
  const [expandedDescription, setExpandedDescription] = useState(true);
  const maxChars = 200;

  return (
    <div>
      <img src={image} width={200} height={200} alt='Episode'></img>
      <br></br>
      {title}
      <br></br>
      <AudioPlayer audioSrc={link}/>
      <br></br>
      {moment(pubDate).format("DD-MM-YYYY")}
      <br></br>
      {duration}
      <br></br>
      {expand()}
    </div>
  )

  function expand(){
    if (description.length <= maxChars) return <p>{description}</p>

    const text = expandedDescription ? description.substring(0, maxChars) : description

    return (
      <>
        <p>{text}...</p>
        <button onClick={() => setExpandedDescription(!expandedDescription)}>{expandedDescription? "Read More": "Read Less"}</button>
      </>
    )
  }
}

export default SingleEpisode
