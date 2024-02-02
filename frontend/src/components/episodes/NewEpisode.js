import {React, useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function NewEpisode() {

  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      <section>  
        <h1>New Episode</h1>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Episode Title'/>
            <Form.Label>Audio</Form.Label>
            <Form.Control type='text' value={audio} onChange={(e) => setAudio(e.target.value)} placeholder='Episode Audio URL'/>
            <Form.Label>Image</Form.Label>
            <Form.Control type='text' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Episode Image URL'/>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder='Episode description'/>
            <Form.Label>Season</Form.Label>
            <Form.Control type='text' placeholder='Episode season'/>
            <Form.Label>Episode Number</Form.Label>
            <Form.Control type='text' placeholder='Episode number'/>
          </Form.Group>
        </Form>
        <div className='text-center'>
        <Button variant='primary' style={{width : '100px'}}>Publish</Button>
        </div>
      </section>
    </div>
  )
}

export default NewEpisode
