import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';
import './NewAnime.css';



function NewAnime({ text, content }) {

  useEffect(() => {
    animate('.ball', {
      translateY: -100,
      direction: 'alternate',
      loop: false,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div
      className='myBall'
      style={{ color:'white' }}
    >

      <div
        className='ball'
        style={{ alignItems:'center', borderRadius:'10px' }}
      >
        <h1 style={{justifyItems:'left', margin:'20px', fontSize:'22px'}}> { text } </h1>
        <p style={{justifyItems:'center', margin:'20px', fontSize:'18px', color:'lightgrey'}}> { content } </p>
      </div>
      <br/>


    </div>
  )
}

export default NewAnime
