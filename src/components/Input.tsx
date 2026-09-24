/**/

import { MouseEvent } from 'react'

export const Input = ({
  name,
  value,
  onChange,
} : {
  name: string,
  value: string,
  onChange: (event: MouseEvent) => void,
}) => {

  return (
    <>
      <div style={{ marginTop: '40px', marginLeft: '30px', maxWidth: '300px', color: 'white' }}>
        <br/>
        { name }
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
        <div
          style={
            {
              width: '80%',
              height: '70px',
              marginTop: '22px',
              borderRadius: '10px',
              display: 'flex',
              textAlign: 'left',
              flexGrow: '0',
            }
          }
        >
          <input
            style={{ padding: '20px 150px', borderRadius: '20px', border: 'none', backgroundColor: '#121212', textAlign: 'left', fontSize: '15px', fontWeight: 'bold', color: 'white' }}
            value={ value }
            onChange={ onChange }
          />
        </div>
        <br/>
        </div>
    </>
  )
}
