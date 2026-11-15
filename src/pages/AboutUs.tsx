/* About Us Page */
import NewAnime from '@/components/NewAnime.tsx';
import Effect from '@/animeanimations/Effect.jsx'

const AboutUs = () => {
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
            text='About Us'
            content=' ' 
          >
            {/* --- */}
          </NewAnime>
        </Effect>
      </div>
    </>
  )
}

export default AboutUs
