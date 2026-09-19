/**/
import NewAnime from '../animeanimations/NewAnime.jsx';
import Effect from '../animeanimations/Effect.jsx'

const ContactUs = () => {

  return (
    <>
      <div
        style={{
          alignItems:'center',
          textAlign:'center',
          paddingTop:'300px',
          color:'white'
        }}
      >
        <Effect>
          <NewAnime
            text='Contact us'
            content='Hello everyone'
          />
        </Effect>
        <br/>
      </div>
    </>
  )
}

export default ContactUs
