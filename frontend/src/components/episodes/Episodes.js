import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Row, Col, Button, Card} from 'react-bootstrap';
import 'bootstrap';
import AudioPlayer from '../audioplayer/AudioPlayer';
import './Episodes.css';
import moment from 'moment';

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
          <Row className='row g-0'>
            <Col>
              {slice.map((episode) => (
                <Card className='card mx-auto text-center w-75 mb-3'>
                  <Card.Body>
                    <Card.Text>{moment(episode.pubDate).format("DD MMM YYYY")}</Card.Text>
                    <Card.Title>{episode.title}</Card.Title>
                    <Card.Text>{episode.description}</Card.Text>
                    <AudioPlayer audioSrc={episode.link}/>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </section>
      <div className='text-center'>
        <Button variant='primary' onClick={() => loadMore()} style={{width: '100px'}}>Load More</Button>
      </div>
    </div>
  )
}

export default Episodes;