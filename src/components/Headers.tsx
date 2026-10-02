/**/
import './Headers.css';

export const Header = ({ children } : { children: string }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ left: '30px', color: 'white', fontSize: '25px', marginLeft: '-35px' }}>
          <h1>{ children }</h1>
        </div>
      </div>
    </>
  )
}

export const GlowingHeader = ({
  headerOne,
  headerThree,
  headerOneAgain,
  headerThreeAgain
} : {
  headerOne: string,
  headerThree: string,
  headerOneAgain: string,
  headerThreeAgain: string
}) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'  }}>
        <div
          className='text'
          style={{
            backgroundColor: '#271B3D',
            marginTop: '0.7rem',
            maxWidth: '500px',
            width: '70%',
            height: '80px',
            borderRadius: '14px',
            padding: '0.5rem 1rem',
          }}
        >
          <div className='text-one'>
            <h1 style={{ color: 'white', marginTop: '9%' }}> { headerOne }</h1>
            <h3 style={{ color: 'grey', marginTop: '5%' }}>{ headerThree }</h3>
          </div>
          <div className='text-two'>
            <h1 style={{ color: 'white', marginTop: '9%' }}>{ headerOneAgain }</h1>
            <h3 style={{ color: 'grey', marginTop: '5%' }}>{ headerThreeAgain }</h3>
          </div>
        </div>
      </div>
    </>
  )
}
