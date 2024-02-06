import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BouncingDotsLoader from './loader/BouncingDotsLoader';

function Platforms() {
  const [platforms, setPlatforms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(platforms);

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
    getPlatforms();
  }, []);

  return (
    <div>
      <section>
        <div className='container'>
          {isLoading ? (
            <BouncingDotsLoader/>
          ) : (
            <>
              {platforms.length > 0 ? (
                <>
                  {
                    platforms.map((platform, index) => (
                      <div key={index}>
                        <a href={platform.link}><img src={platform.image} width={75} height={75} alt='Platform'></img></a>
                      </div>
                  ))}
                </>
              ): (
                <div>
                  No Platforms
                </div>
              )}
            </>
          )
        }
        </div>
      </section>
    </div>
  )
}

export default Platforms
