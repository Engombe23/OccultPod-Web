import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Episode from '../components/episodes/Episode';
import BouncingDotsLoader from '../components/loader/BouncingDotsLoader';
import {Row, Col} from 'react-bootstrap';
import Pagination from '../pagination/Pagination';

function Episodes(){
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(10);

  const lastEpisodeIndex = currentPage * episodesPerPage;
  const firstEpisodeIndex = lastEpisodeIndex - episodesPerPage;
  const currentEpisodes = episodes.slice(firstEpisodeIndex, lastEpisodeIndex);


  const getEpisodes = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/episodes');
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
                    currentEpisodes.map((episode, index) => {
                      return (
                        <>
                        <Row className='row g-0'>
                          <Col className='col-lg-12'>
                            <Episode key={index} episode={episode}/>
                          </Col>
                        </Row>
                        </>
                        
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
          <Pagination totalEpisodes={episodes.length} episodesPerPage={episodesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </section>
    </div>
  )
}

export default Episodes;