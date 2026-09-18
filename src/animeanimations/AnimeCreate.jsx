import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

function AnimeCreate({ line, words }) {
  useEffect(() => {
    animate('.animeObject', {
      translateY: -50,
      direction: 'alternate',
      loop: false,
      easing: 'easeInOutSine'
    });
  }, []);
  return (
    <div className='animeObject'
      style={{ dislay: 'flex', backgroundColor:'black', width: '200px', height: '100px', margin: '70px', color: 'green', marginTop: '100px', alignItems: 'center', textAlign: 'center',   }}
    >
      <h1 style={{ justifyItems: 'center', fontSize: '50px', textAlign: 'center' }}> {line} </h1>
      <p style={{ justifyItems: 'center', fontSize: '18px', color: 'grey' }}>{words}</p>
    </div>
  )
}

export default AnimeCreate
