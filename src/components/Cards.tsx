/**/
import { ArrowRight } from 'lucide-react';
import { MouseEvent } from 'react'
import { useHover } from '@/hooks/useHover.tsx'

export const Card = ({
  text,
  onClick,
} : {
  text: string,
  onClick: (e: MouseEvent<HTMLDivElement>) => void ,
}) => {

  const hoverAction = useHover()
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
            width: '190px',
            fontSize: '10px',
            height: '70px',
            marginTop: '24px',
            borderRadius: '10px',
            left: '30',
            backgroundColor: 'indigo',
            marginLeft: '200px',
            flexGrow: '0',
            cursor: 'pointer',
            textAlign: 'center',
            color: "white",
            fontWeight: 'bold',
          }
        }
      >
        {
          !hoverAction
          ? (
              <h1 style={{ color: "grey", marginTop: '18px', }}>
                { text }
              </h1>
            )
          : (
              <h1 style={{ marginTop: '18px', }}>
                { text }
              </h1>
            )
        }

        <span >
          <ArrowRight
            size={ 20 }
          />
        </span>
      </div>
      <br/>
    </div>
  )
}
