import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

function AnimeBox() {

  useEffect(() => {
    animate('.aBox', {
      keyframes: [
        { translateY: -50 },
        { translateX: 50 },
        { translateY: 0 },
        { translateX: 0 }
      ],
      duration: 2000,
      easing: 'easeOutElastic(2, .9)'
    });
  }, []);
  
  return (
    <div
      className='aBox'
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'darkblue',
        borderRadius: '100px',
      }}
    >
    </div>
  )
}

export default AnimeBox
