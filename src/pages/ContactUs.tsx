/**/
import NewAnime from '@/components/NewAnime.tsx';
import Effect from '@/animeanimations/Effect.jsx'

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
            text='Contact us here!'
            content='Phone Number(s): 08175206448'
            secondContent='Whatsapp: 08175206448'
          />
        </Effect>
        <br/>
      </div>
    </>
  )
}

export default ContactUs
