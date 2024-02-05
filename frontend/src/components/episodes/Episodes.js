import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Episodes.css';
import Episode from './Episode';
import BouncingDotsLoader from '../loader/BouncingDotsLoader';

function Episodes(){
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(episodes);

  const getEpisodes = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('http://localhost:5000/api/episodes');
      setEpisodes(res.data);
      setIsLoading(false);
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
          {isLoading ? (
            <BouncingDotsLoader/>
          ) : (
            <>
              {episodes.length > 0 ?(
                <>
                  {
                    episodes.map((episode, index) => {
                      return (
                        <Episode key={index} episode={episode}/>
                      )
                    })
                  }
                </>
              ): (
                <div>
                  There is no episode
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Episodes;