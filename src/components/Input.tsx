/**/
import { ChangeEvent } from 'react'
import { chakra } from '@chakra-ui/react'

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
        { name }
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
        <div
          style={
            {
              maxWidth: '200px',
              width: '80%',
              height: '70px',
              marginTop: '2rem',
              borderRadius: '1px',
              display: 'flex',
              textAlign: 'left',
              flexGrow: '0',
            }
          }
        >
          <chakra.input
            w={{ base: "100%", md: "80%", lg: "1000px" }}
            px={{ base: 4, md: 8 }}
            py={{ base: 3, md: 5 }}

            style={{
              borderRadius: '20px',
              border: 'none',
              backgroundColor: '#121212',
              textAlign: 'center',
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
