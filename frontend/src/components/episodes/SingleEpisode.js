import React from 'react';
import { useLoaderData } from 'react-router-dom';
import moment from 'moment';

function SingleEpisode() {
  const {image, title, link, pubDate, duration, description} = useLoaderData();
  return (
    <div>
      <img src={image} width={200} height={200} alt='Episode'></img>
      <br></br>
      {title}
      <br></br>
      <audio src={link}/>
      <br></br>
      {moment(pubDate).format("DD-MM-YYYY")}
      <br></br>
      {duration}
      <br></br>
      {description}
    </div>
  )
}

export default SingleEpisode
