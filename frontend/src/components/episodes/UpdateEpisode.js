import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Card, Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';

function UpdateEpisode() {
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const [episode, setEpisode] = useState({
    title: "",
    link: "",
    episode_season: "",
    episode_number: "",
    description: "",
  });
  const navigate = useNavigate();

  const getEpisode = async () => {
    setIsLoading(true);
    try{
        const response = await axios.get(`http://localhost:5000/api/episodes/${id}`);
        setEpisode({
            title: response.data.title,
            link: response.data.link,
            episode_season: response.data.episode_season,
            episode_number: response.data.episode_number,
            description: response.data.description
        })
        setIsLoading(false);

    }catch(error){
        setIsLoading(false);
        console.error(error.message);
    }

  }

  useEffect(() => {
    getEpisode();
  }, [])

  const updateEpisode = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/episodes/${id}`, episode);
      console.log('Updated an episode');
      navigate('/dashboard');
    }
    catch(error){
      setIsLoading(false);
    }
  }

  return (
    <div>
      <section>
        {isLoading ? ("Loading") : (
          <>
            <Card className='card mx-auto'>
              <Card.Header>General</Card.Header>
              <Form onSubmit={updateEpisode}>
                <Form.Group className='mb-3'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control type='text' value={episode.title} onChange={(e) => setEpisode({...episode, title: e.target.value})} placeholder='Episode Title'/> 
                  <Form.Label>Link</Form.Label>
                  <Form.Control type='text' value={episode.link} onChange={(e) => setEpisode({...episode, link: e.target.value})} placeholder='Episode Audio'></Form.Control>
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridSeason">
                    <Form.Label>Season</Form.Label>
                    <Form.Control type="number" value={episode.episode_season} onChange={(e) => setEpisode({...episode, episode_season: e.target.value})} placeholder="Episode Season" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEpisodeNumber">
                    <Form.Label>Episode</Form.Label>
                    <Form.Control type="number" value={episode.episode_number} onChange={(e) => setEpisode({...episode, episode_number: e.target.value})} placeholder="Episode Number" />
                  </Form.Group>
                </Row>
                <Form.Group className='mb-3'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" style={{height: '200px'}} type='text' value={episode.description} onChange={(e) => setEpisode({...episode, description: e.target.value})} placeholder='Episode Description'/>
                </Form.Group>
                <div>
                  {
                    !isLoading && (<Button type='submit' style={{width: '100px'}}>Update</Button>)
                  }
                </div>
              </Form>
            </Card>
          </>
        )}
      </section>
    </div>
  )
}

export default UpdateEpisode
