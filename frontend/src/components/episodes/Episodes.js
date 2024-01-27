import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import 'bootstrap';
import AudioPlayer from '../audioplayer/AudioPlayer';
import './Episodes.css';

function Episodes(){
  const [episodes, setEpisodes] = useState([]);
  const [noOfEpisodes, setnoOfEpisodes] = useState(8);

  const loadMore = () => {
    setnoOfEpisodes(noOfEpisodes + noOfEpisodes);
  }

  console.log(episodes);

  const slice = episodes.slice(0, noOfEpisodes);

  const getEpisodes = async() => {
    try {
      const res = await axios.get('http://localhost:5000/api/episodes');
      setEpisodes(res.data);
    } catch (error){
      console.error(error);
    }
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div>
      <section>
        <div className='container'>
          <div className='row g-0'>
            <div className='col'>
            {slice.map((episode) => (
                <div className="card text-center w-75 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{episode.title}</h5>
                    <p className="card-text">{episode.description}</p>
                    <AudioPlayer audioSrc={episode.link}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Button variant='primary' onClick={() => loadMore()}>Load More</Button>
    </div>
  )
}

export default Episodes;