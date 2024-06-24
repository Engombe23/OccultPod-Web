import React from 'react';
import '../pages/Pages.css'

function Platform({platform}) {
  return (
    <div>
      <a href={platform.link}><img src={platform.image} width={75} height={75} alt='Platform'></img></a>
    </div>
  )
}

export default Platform
