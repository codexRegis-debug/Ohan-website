/**/
import { useEffect } from 'react';
import { animate } from 'animejs';

const AnimeRotate = ({ line, words } : { line: string, words: string }) => {
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
      style={{ backgroundColor:'black', width: '60%', height: '100px', margin: '70px', color: 'white', marginTop: '100px', alignItems: 'center', textAlign: 'center' }}
    >
      <h1 style={{ justifyItems: 'center', fontSize: '50px', textAlign: 'center' }}> {line} </h1>
      <p style={{ justifyItems: 'center', fontSize: '18px', textAlign: 'center', color: 'grey' }}>{words}</p>
    </div>
  )
}

export default AnimeRotate
