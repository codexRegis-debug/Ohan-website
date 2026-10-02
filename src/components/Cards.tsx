/**/
import { ArrowRight } from 'lucide-react';
import { MouseEvent } from 'react'


export const Card = ({
  text,
  onClick,
} : {
  text: string,
  onClick: (e: MouseEvent<HTMLDivElement>) => void ,
}) => {

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <div
        onClick={ onClick }
        style={
          {
            maxWidth: '190px',
            fontSize: '1.5rem',
            height: '70px',
            marginTop: '24px',
            borderRadius: '10px',
            left: '30',
            padding: '1rem',
            backgroundColor: 'indigo',
            marginLeft: '30%',
            flexGrow: '0',
            cursor: 'pointer',
            textAlign: 'center',
            color: "white",
            fontWeight: 'bold',
          }
        }
      >

        <h1 style={{ marginTop: '3%', }}>
          { text }
        </h1>
        <span >
          <ArrowRight
            style={{ marginTop: '-10%', marginLeft: '50%' }}
            size={ 20 }
          />
        </span>
      </div>
      <br/>
    </div>
  )
}
