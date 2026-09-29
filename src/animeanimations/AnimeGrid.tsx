/**/
import { useEffect } from 'react';
import { animate } from 'animejs';
import './AnimeGrid.css';

const AnimeGrid = ({
  text,
  message,
} : {
  text: string,
  message: string,
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
        }}
      >
        <div
          className='cicle'
        >
        </div>
        <h1
          style={{
            fontSize: '25px',
            alignItems: 'center',
            marginLeft: '60px',
            left: '32px',
          }}
        >
          { text }
        </h1>
        <h2
          style={{
            color: 'grey',
            fontSize: '15px',
            margin: '2px',
            marginLeft: '80px',
            display: 'flex',
          }}
        >
          { message }
        </h2>
      </div>
    </div>
  )
}

export default AnimeGrid
