import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Episodes(){
  const [episodes, setEpisodes] = useState([]);

  console.log(episodes);

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
      <div className='container'>
        <Row xs={2} md={4} className='g-4'>
          {episodes.map((episode, index) => (
            <Col key={index}>
              <Card style={{width: '18rem'}} className='h-100'>
                <Card.Img variant='top' src={episode.image}/>
                <Card.Body>
                  <Card.Text>{"Season: " + episode.episode_season + " Episode: " + episode.episode_number}</Card.Text>
                  <Card.Title>{episode.title}</Card.Title>
                  <Button variant='primary' href={'episodes/' + episode.slug}>Listen Now</Button>
                </Card.Body>
              </Card>
            </Col>
           ))}
        </Row>
      </div>
    </div>
  )
}

export default Episodes;