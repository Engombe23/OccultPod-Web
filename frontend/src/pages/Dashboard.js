import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Button, Table} from 'react-bootstrap';
import moment from 'moment';

function Dashboard() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
            "Loading"
          ) : (
            <>
              {episodes.length > 0 ?(
                <>
                  <Card>
                    <Card.Header>Episodes
                      <div className='position-absolute top-0 end-0 px-2'>
                        <Button style={{width: '150px', height: '30px'}}>New Episode</Button>
                      </div>
                    </Card.Header>
                    {
                      <Table striped>
                        <thead>
                          <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {episodes.map((episode, index) => (
                            <tr>
                             <>
                              <td key={index}><Card.Img src={episode.image} style={{width: '5rem'}}/></td>
                              <td>{episode.title}</td>
                              <td>{moment(episode.pubDate).format("DD MMM YYYY")}</td>
                             </>
                            </tr>
                          ))}
                          </tbody>
                        </Table>
                      }
                  </Card>
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

export default Dashboard
