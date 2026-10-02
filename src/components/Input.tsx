/**/
import { ChangeEvent } from 'react'

export const Input = ({
  name,
  value,
  onChange,
} : {
  name: string,
  value: string,
  onChange: (event: ChangeEvent) => void,
}) => {

  return (
    <>
      <div style={{ marginTop: '3rem', marginLeft: '30px', maxWidth: '300px', color: 'white' }}>
        <br/>
        { name }
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
        <div
          style={
            {
              maxWidth: '200px',
              width: '80%',
              height: '70px',
              marginTop: '3rem',
              borderRadius: '10px',
              display: 'flex',
              textAlign: 'left',
              flexGrow: '0',
            }
          }
        >
          <input
            style={{
              padding: '2rem 20rem',
              maxWidth: '80%',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: '#121212',
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: 'bold',
              color: 'white',
            }}
            value={ value }
            onChange={ onChange }
          />
        </div>
        <br/>
        </div>
    </>
  )
}
