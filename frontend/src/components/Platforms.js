import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Platforms() {
  const [platforms, setPlatforms] = useState([]);

  console.log(platforms);

  const getPlatforms = async() => {
    try {
      const res = await axios.get('http://localhost:5000/api/platforms');
      setPlatforms(res.data);
    } catch (error){
      console.error(error);
    }
  }

  useEffect(() => {
    getPlatforms();
  }, []);

  return (
    <div>
      {platforms.map((platform, index) => (
        <div key={index}>
           <a href={platform.link}><img src={platform.image} width={75} height={75} alt='Platform'></img></a>
        </div>
      ))}
    </div>
  )
}

export default Platforms
