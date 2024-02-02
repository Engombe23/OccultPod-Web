import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function UpdateEpisode() {
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const [episode, setEpisode] = useState({
    title: ""
  });
  const navigate = useNavigate();

  const getEpisode = async () => {
    setIsLoading(true);
    try{
        const response = await axios.get(`http://localhost:5000/api/episodes/${id}`);
        setEpisode({
            title: response.data.title
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
      navigate('/');
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
            <Form onSubmit={updateEpisode}>
              <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' value={episode.title} onChange={(e) => setEpisode({...episode, title: e.target.value})} placeholder='Episode Title'/> 
              </Form.Group>
              <div>
                {
                  !isLoading && (<Button type='submit' style={{width: '100px'}}>Update</Button>)
                }
              </div>
            </Form>
          </>
        )}
      </section>
    </div>
  )
}

export default UpdateEpisode
