import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AudioPlayer from '../audioplayer/AudioPlayer';
import moment from 'moment';

function Episode({episode}) {
  return (
    <div>
      <section>
        <div className='container'>
          <Row className='row g-0'>
            <Col className='col-lg-12'>
              <Card className='card mx-auto text-center w-75 mb-3'>
                <Link to={`/episodes/${episode._id}`}><Card.Img className='img-fluid rounded-start p-3' src={episode.image}/></Link>
                <Card.Body>
                  <Card.Text>{moment(episode.pubDate).format("DD MMM YYYY")}</Card.Text>
                  <Card.Title>{episode.title}</Card.Title>
                  <Card.Text>{episode.description}</Card.Text>
                  <AudioPlayer audioSrc={episode.link}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Episode
