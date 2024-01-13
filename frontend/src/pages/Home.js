import React from 'react';
import Episodes from '../components/episodes/Episodes';
import './Home.css';

function Home() {
  return (
    <div>
      <section>
        <h1>Latest Episodes</h1>
        <Episodes/>
      </section>
    </div>
  )
}

export default Home
