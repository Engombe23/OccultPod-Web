import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';
import Platform from '../components/Platform';
import BouncingDotsLoader from '../components/loader/BouncingDotsLoader';
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Home() {

  const [trailer, setTrailer] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTrailer = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('http://localhost:5000/api/episodes/658f2b7a5812c6a749c00186');
      setTrailer(res.data);
      setIsLoading(false);
    }
    catch(error){
      console.error(error);
    }
  }

  const getPlatforms = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('http://localhost:5000/api/platforms');
      setPlatforms(res.data);
      setIsLoading(false);
    } catch (error){
      console.error(error);
    }
  }

  useEffect(() => {
    getTrailer();
    getPlatforms();
  }, []);

  return (
    <div>
      <section>
        {isLoading ? (<BouncingDotsLoader/>) : (
          <>
            {trailer.title}<br></br>
            {trailer.description}<br></br>
            <img src={trailer.image} width={200} height={200} alt='Trailer'></img>

            {platforms.length > 0 ? (
              <>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                  {
                    platforms.map((platform, index) => (
                      <Platform key={index} platform={platform}/>
                    ))
                  }
                </div>
                </>
              ): (
                <div>
                  No Platforms
                </div>
              )}
              <Link to='https://instagram.com/occultpod_13'><FaInstagram/></Link>
              <Link to='https://twitter.com/OccultPod_13'><FaTwitter/></Link>
              <FaYoutube/>
              <MdEmail />
              <Link to={'/episodes'}><Button className='text-center' style={{width: '150px'}}>Click for episodes</Button></Link>
            </>
          )}
      </section>
    </div>
  )
}

export default Home
