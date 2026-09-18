import { animate, createScope, spring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';

function AnimeAnimate() {
  const root = useRef(null);
  const scope = useRef(null);
  const [ rotations, setRotations ] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add( self => {
      animate('.box', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: spring({ bounce: .7 }) },
        ],
        loop: true,
        loopDelay: 250,
      });
      createDraggable('.box', {
        container: [0, 0, 0, 0],
        releaseEase: spring({ bounce: .7 })
      });
      self.add('rotateLogo', (i) => {
        animate('.box', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        })
      })
    })
    return () => scope.current.revert()
  }, []);

  const handleClick = () => {
    setRotations(prev => {
      const newRotations = prev + 1;
      scope.current.methods.rotateLogo(newRotations);
      return newRotations;
    });
  };

  return (
    <div ref={root}>
      <div

        style={{textAlign:'center', paddingTop:'300px', color:'white'}}
      >
        <h1 className='home'></h1>
        <div
          className='box'
          style={{backgroundColor: 'aquamarine', width: '40px', height: '40px', margin: 'auto'}}
        >
        </div>
      </div>
    </div>
  )

}

export default AnimeAnimate
