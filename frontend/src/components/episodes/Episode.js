import React, {useState} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AudioPlayer from '../audioplayer/AudioPlayer';
import moment from 'moment';

function Episode({episode}) {
  const [expandedDescription, setExpandedDescription] = useState(true);
  const maxChars = 200;

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
                  <Card.Text>{expand()}</Card.Text>
                  <AudioPlayer audioSrc={episode.link}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )

  function expand(){
    if (episode.description.length <= maxChars) return <p>{episode.description}</p>

    const text = expandedDescription ? episode.description.substring(0, maxChars) : episode.description

    return (
      <>
        <p>{text}...</p>
        <button onClick={() => setExpandedDescription(!expandedDescription)}>{expandedDescription? "Read More": "Read Less"}</button>
      </>
    )
  }

}

export default Episode
