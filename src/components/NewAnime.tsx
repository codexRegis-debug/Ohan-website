/**/
import { useEffect } from 'react';
import { animate } from 'animejs';
import { chakra } from '@chakra-ui/react'
import './NewAnime.css';

const NewAnime = ({
  text,
  content,
  secondContent,
  anotherSecondContent,
} : {
  text: string,
  content: string,
  secondContent?: string,
  anotherSecondContent?: string
}) => {
  useEffect(() => {
    animate('.ball', {
      translateY: -100,
      direction: 'alternate',
      loop: false,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <chakra.div
      className='myBall'
      style={{ color:'white' }}
    >
      <chakra.div
        w={{ base: "90%", md: "70%", lg: "500px" }}
        h={{ base: "100%" }}
        className='ball'
        style={{ alignItems:'center', borderRadius:'10px' }}
      >
        <chakra.h1
          style={{justifyItems:'left', margin:'20px', fontSize:'22px'}}>
          { text }
        </chakra.h1>
        <chakra.p
          style={{justifyItems:'center', margin:'20px', fontSize:'18px', color:'lightgrey'}}>
          { content }
        </chakra.p>
        <chakra.p
          style={{justifyItems:'center', margin:'20px', fontSize:'18px', color:'lightgrey'}}>
          { secondContent }
        </chakra.p>
        <chakra.p
          style={{justifyItems:'center', margin:'20px', fontSize:'18px', color:'lightgrey'}}>
          { anotherSecondContent }
        </chakra.p>
      </chakra.div>
      <br/>
    </chakra.div>
  )
}

export default NewAnime
