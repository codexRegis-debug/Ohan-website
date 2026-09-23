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
            width: '500px',
            height: '80px',
            borderRadius: '14px',
            padding: '0.5rem 1rem',
          }}
        >
          <div className='text-one'>
            <h1 style={{ color: 'white' }}> { headerOne }</h1>
            <h3 style={{ color: 'grey' }}>{ headerThree }</h3>
          </div>
          <div className='text-two'>
            <h1 style={{ color: 'white' }}>{ headerOneAgain }</h1>
            <h3 style={{ color: 'grey' }}>{ headerThreeAgain }</h3>
          </div>
        </div>
        {/* Comment */}
      </div>
    </>
  )
}
