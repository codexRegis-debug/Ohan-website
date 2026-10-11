/**/
import { useEffect } from 'react';
import { animate } from 'animejs';
import './AnimeGrid.css';

const AnimeGrid = ({
  text,
  message,
} : {
  text: string,
  message?: string,
}) => {

  useEffect(() => {
    animate('.animegrid', {
      translateY: 20,
      loop: false,
      easing: 'easeInOutSine',
      direction: 'alternate',
    });
  }, []);

  return (
    <div className='grid'>
      <div
        className='animegrid'
        style={{
          marginTop: '10%',
          marginLeft: '5%',
          margin: 'auto',
          width: '90%',
          height: '80px',
          paddingTop: '10px',
          padding: '10px',
          backgroundColor: '#121212',
          borderRadius: '20px',
          justifyItems: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          display: 'flex',
        }}
      >

        <h1
          style={{
            fontSize: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          { text }
        </h1>
        <h2
          style={{
            color: 'grey',
            fontSize: '80%',
            margin: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          { message }
        </h2>
      </div>
    </div>
  )
}

export default AnimeGrid
