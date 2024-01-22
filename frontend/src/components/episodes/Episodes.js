import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Row xs={2} md={4} className='g-4'>
          {slice.map((episode, index, newIndex) => (
            <>
              <Col key={index} md={4}>
                <Card style={{width: '18rem'}} className='h-100' bg='myColour'>
                  <Link to={`/episodes/${episode._id}`}><Card.Img src={episode.image} /></Link>
                </Card>
              </Col>
              <Col key={newIndex} md={8}>
                <Card.Body>
                  <Card.Text>{"Season: " + episode.episode_season + " Episode: " + episode.episode_number}</Card.Text>
                  <Card.Title>{episode.title}</Card.Title>
                  <Card.Text>{episode.description}</Card.Text>
                </Card.Body>
              </Col>
            </>
          ))}
        </Row>
      <Button variant='primary' onClick={() => loadMore()}>Load More</Button>
    </div>
  )
}

export default Episodes;