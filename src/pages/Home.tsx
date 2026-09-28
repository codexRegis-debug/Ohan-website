/**/
/*
* import {
*   useState,
*   useRef,
* } from 'react';
*/
import { NavLink } from 'react-router-dom';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { XCircle } from 'lucide-react';
import NewAnime from '@/animeanimations/NewAnime.jsx';
import AnimeRotate from '@/animeanimations/AnimeRotate.jsx';
import AnimeGrid from '@/animeanimations/AnimeGrid.jsx';
import Effect from '@/animeanimations/Effect.jsx';
import './Home.css';

const listItems = [
  {
    text: 'Free affiliate marketing training',
    content: 'Step-by-step guides, hook formulas, and content playbooks that teach you how to promote offers organically on TikTok, Instagram and Youtube'
  },
  {
    text: 'Curated affiliate offers that pay',
    content: 'Real brand patners (FaZe Clan, Pudgy Penguins, Blackout Bingo and more) paying real commissions per signup, install, or sale you drive'
  },
  {
    text: 'A 160K+ affiliate community',
    content: 'Daily live calls with vetted Mentors, a community that never sleeps, and people who actually share what is converting right now'
  },
]

const textItems = [
  {line: '$100M+', words: 'Paid to Members'},
  {line: '160K+', words: 'Active Affiliates'},
  {line: '30+', words: 'Free Guides'},
  {line: '100%', words: 'Free Forever'},
]

const someText = [
  {
    text: 'Sign up free',
    message: '60 seconds, no card. Get instant access to the training',
  },
  {
    text: 'Pick an affiliate offer',
    message: 'Choose from curated offers that are actually converting right now',
  },
  {
    text: 'Post organically & earn commissions',
    message: 'Use our playbooks to post on TikTok, IG or youtube. Get paid for every conversion',
  },
]

const Home = () => {
  return (
    <>
      <div
        className='header'
        style={{ margin: 'auto', marginTop: '20px', paddingTop: '5px', alignItems: 'center', fontWeight: '100px', justifyItems: 'center', textAlign:'center', color:'white', fontSize:'9px', width: '300px', height: '30px', backgroundColor: 'gray', borderRadius: '20px'}}
        >
          <h1> Watch - Join - Get paid </h1>
      </div>
          <br/>
      <div className='topText' style={{marginTop:'30px', textAlign:'center', color:'white', fontSize:'24px'}}>
        <h1>Get paid to promote</h1>
        <h1 className='heading-color'>affiliate offers </h1>
        <h1>organically, from your </h1>
        <h1>phone.</h1>
        <br/>
      </div>
      <div style={{marginTop:'30px', textAlign:'center', fontSize:'24px'}}>
        <p style={{color: 'darkgrey'}}>Free training, real offers, a 160K+</p>
        <p style={{color: 'darkgrey'}}>community.</p> <p style={{color:'white'}}> Watch the 5-min video below</p>
        <p style={{color:'white'}}>- then join free today.</p>
      </div>
      <br/>
      <Effect>
        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', width: '100%'}}>
          <NavLink className="SignUpLink" to="/sign-in">
            <div
              className='white-glow'
            >
              {'Sign up For Free ->'}
            </div>
          </NavLink>
        </div>
      </Effect>
      <br/>
      <br/>

      <div  style={{  paddingTop: '10px' ,alignItems:'center', display: 'flex'}}>
        <p style={{ alignItems:'center', color: 'grey' }}>Free forever. No Startup Costs. Takes 60 seconds</p>
      </div>

      <div
        className='box-container'
        style={{ backgroundColor: 'black' }}
      >
        <Effect>
          <AnimeRotate
            className='box'
            line={textItems[0].line}
            words={textItems[0].words}
            style={{ color: 'white' }}
          />
        </Effect>
        <Effect>
          <AnimeRotate
            className='box'
            line={textItems[1].line}
            words={textItems[1].words}
            style={{ color: 'white' }}
          />
        </Effect>
        <Effect>
          <AnimeRotate
            className='box'
            line={textItems[2].line}
            words={textItems[2].words}
            style={{ color: 'white' }}
              />
        </Effect>
        <Effect>
          <AnimeRotate
            className='box-4'
            line={textItems[3].line}
            words={textItems[3].words}
            style={{ color: 'green' }}
          />
        </Effect>
        </div>
        <Effect>
          <div
            className='text-grid'
            style={{ justifyItems: 'center', fontSize: '23px', marginTop: '10px', color: 'white' }}
          >
            <h1>
              Free Community that
            </h1>
            <h1>
              turns beginner
            </h1>
            <h1>
              affiliates into top
            </h1>
            <h1 className='text-1'>
              affiliates in the
            </h1>
            <h1 className='text-2'>
              industry
            </h1>
          </div>
        </Effect>
        <div style={{ color: 'grey', textAlign: 'center', marginTop: '30px', fontSize: '20px' }}>
          <p> No paid ads.No follower required. Pick an </p>
          <p> offer, learn how to post it organically, get </p>
          <p> paid commission on every conversion </p>
        </div>
        <div style={{textAlign:'left', paddingTop:'300px', color:'white' }}>
          <Effect>
            <NewAnime
              text={listItems[0].text}
              content={listItems[0].content}
            />
          </Effect>

          <br/>
          <Effect>
            <NewAnime
              text={listItems[1].text}
              content={listItems[1].content}
            />
          </Effect>

          <br/>
          <Effect>
            <NewAnime
              text={listItems[2].text}
              content={listItems[2].content}
            />
          </Effect>
          <div
            className='affiliate'
            style={{ justifyItems: 'center', textAlign: 'center', marginTop: '30px' }}
          >
            <Effect>
              <h1 style={{  color: "white", fontWeight: '30px', fontSize: '42px' }}> Affiliate marketing on </h1>
              <h1 className='diff-colour' style={{ fontWeight: '30px', fontSize: '42px' }}> your own isn't working </h1>
              <h1 style={{  color: "white", fontWeight: '30px', fontSize: '42px' }}> - and you know it. </h1>
            </Effect>
          </div>
          <div style={{ fontWeight: '', marginTop: '30px', marginLeft: '15px' }}>
            <h1 style={{ fontSize: '24px', color:'grey', justifyItems:'left' }}> You've probably tried... </h1>
            <Effect>
              <div
                className='border-box'
                style={{ color: 'white', justifyItems: 'center', alignItems: 'center',  backgroundColor: '#121212', borderRadius: '15px', marginTop: '30px', width: '500px', height: '100px' }}
              >
                <XCircle style={{ margin: '15px' }} size={26} color={'red'}/>
                <h3 style={{ textAlign:'center', marginTop: '-45px', marginLeft: '25px',  }}>Posting your own content and getting 200 views</h3>
              </div>
            </Effect>
            <Effect>
              <div
                className='border-box'
                style={{ justifyItems: 'center', alignItems: 'center',  backgroundColor: '#121212', borderRadius: '15px', marginTop: '30px', width: '500px', height: '100px' }}

              >
                <XCircle style={{ margin: '15px' }} size={26} color={'red'}/>
                <h3 style={{ textAlign:'center', marginTop: '-45px', marginLeft: '40px',  }}>Following gurus who never show real numbers or real offers</h3>
              </div>
            </Effect>
            <Effect>
              <div
                className='border-box'
                style={{ justifyItems: 'center', alignItems: 'center',  backgroundColor: '#121212', borderRadius: '15px', marginTop: '30px', width: '500px', height: '100px' }}

              >
                <XCircle style={{ margin: '15px' }} size={26} color={'red'}/>
                <h3 style={{ textAlign:'center', marginTop: '-45px', marginLeft: '30px',  }}>Joining affiliate programs that play pennies and never convert.</h3>
              </div>
            </Effect>
            <br/>
            <Effect>
              <div style={{ color: 'white', fontSize: '18px', alignItems: 'left', justifyItems: 'center', display: 'grid'  }}>
                <h2>This fixes the part everyone gets </h2>
                <h2 className='second-text'>wrong: picking the right offer and</h2>
                <h2 className='third-text'>knowing what to post.</h2>
              </div>
            </Effect>
            <br/>
            <Effect>
              <div style={{ marginTop:'90px', justifyItems: 'center', textAlign: 'center', fontSize: '40px' }}>
                <p className='another-text'>How it actually works</p>
                <p className='this-text'> Three steps. No fluff.</p>
              </div>
            </Effect>
          </div>
          <Effect>
            <AnimeGrid
              text={someText[0].text}
              message={someText[0].message}
            />
          </Effect>
          <br/>

          <Effect>
            <AnimeGrid
              text={someText[1].text}
              message={someText[1].message}
            />
          </Effect>
          <br/>

          <Effect>
            <AnimeGrid
              text={someText[2].text}
              message={someText[2].message}
            />
          </Effect>

          <br/>
          <br/>
          <Effect>
            <div
              className='anoText'
              style={{ justifyItems: 'center', color: 'white', textAlign: 'center', marginTop: '90px' }}
            >
              <h1 className='purple-heading'> Here's exactly what you </h1>
              <h1> get when you join </h1>
            </div>
          </Effect>

          <Effect>
            <AnimeGrid
              text={'Curated affiliate offers that actually convert'}
            />
          </Effect>
          <br/>
          <br/>

          <Effect>
            <AnimeGrid
              text={'Training to promote them organically on TikTok, IG & Youtube'}
            />
          </Effect>
          <br/>
          <br/>

          <Effect>
            <AnimeGrid
              text={'Step-by-step playbooks for hooks, scripts & content ideas'}
            />
          </Effect>
          <br/>
          <br/>

          <Effect>
            <AnimeGrid
              text={'Daily live calls with top affiliates and Mentors'}
            />
          </Effect>
          <br/>
          <br/>

          <Effect>
            <AnimeGrid
              text={'30+ guides, templates and tutorials -free'}
            />
          </Effect>
          <br/>
          <br/>

          <Effect>
            <AnimeGrid
              text={'160K+ community of affiliates helping each other'}
            />
          </Effect>
          <br/>
          <br/>
          <div
            className=''
            style={{
              display: 'grid',
              width: '100vw',
              height: '600px',
              backgroundColor: '#121212',
              marginTop: '40px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '30px',
              paddingBottom: '20px'
            }}
          >
            <h1 className='h-text'> Thousands of Success </h1>
            <h1 className='h1-text' > Stories </h1>

            <p className='p-text'> Real results from real members. 8,500+</p>
            <p className='p1-text'>members have shared their earnings.</p>

            <div
              className='some-text'
              onClick={null}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '8px',
                marginTop: '300px',
                width: '180px',
                height: '30px',
                borderRadius: '50px',
                backgroundColor: 'grey',
                cursor: 'pointer',
              }}
            >
              Expand all stories
            </div>
        </div>
            <Effect>
              <div
                style={{
                  fontSize: '20px',
                  marginTop: '40px',
                  textAlign: 'center',
                }}
              >
                <h1 style={{ color: 'white' }}>Common questions</h1>
                <p style={{ color: 'grey' }}>Answered straight, no fluff.</p>
              </div>
           </Effect>

          <div
            style={
              {
                justifyContent: 'center',
              }
            }
          >
            <Effect>
              <AnimeGrid
                text={'Is it actually free?'}
              />
            </Effect>
            <br/>
            <Effect>
              <AnimeGrid
                text={'Do I need followers or experience?'}
              />
            </Effect>
            <br/>
            <Effect>
              <AnimeGrid
                text={'How do members makes money'}
              />
            </Effect>
            <br/>
            <Effect>
              <AnimeGrid
                text={'Do you give scripts or videos to copy'}
              />
            </Effect>
            <br/>
            <Effect>
              <AnimeGrid
                text={'What if I\'m too busy or it\'s not for me? '}
              />
            </Effect>
            <br/>
            <Effect>
              <AnimeGrid
                text={'How quickly will see my first commission?'}
              />
            </Effect>
          </div>

          <div
            style={
              {
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '70px',
                display: 'grid'
              }
            }
          >
            <Effect>
              <p style={{ borderRadius: '40px', width: '200px', height: '40px', backgroundColor: '#121212', color: 'grey', textAlign: 'center', fontSize: '18px', paddingTop: '10px', marginLeft: '100px' }}>Join 160,000+ creators</p>
            </Effect>
            <Effect>
              <div style={{
                marginTop: '40px',
                fontSize: '30px',
               }}>
                <p>Your first affiliate </p>
                <p>commission is one</p>
                <p className='purple-text'>signup away</p>
              </div>
            </Effect>
            <Effect>
              <div style={{ fontSize: '20px', marginTop: '60px', color: 'grey' }}>
                <h3>Free training. Curated offers. A</h3>
                <h3>community of 160K+ affiliates. No card,</h3>
                <h3>no catch</h3>
              </div>
            </Effect>
            <Effect>
              <div style={{ cursor: 'pointer', display: 'flex', marginTop: '80px',  alignItems: 'center', width: '100%'}}>
                <NavLink className='white-div' to='/sign-in'> Sign Up For Free</NavLink>
              </div>
              <h3 style={{ color: 'grey', marginTop: '16px' }}> Takes 60 seconds. No Startup costs</h3>
            </Effect>
          </div>

          <div style={{ display: 'flex', marginTop: '160px', color: 'grey',  alignItems: 'center', width: '100%'}}>
            <h4> 2026. All rights reserved</h4>
          </div>
          <div style={{ display: 'flex', marginTop: '100px', color: 'grey',  alignItems: 'center',gap: '16px', width: '100%'}}>
            <NavLink style={{ color: 'white', cursor: 'pointer' }} to=''>
              <FaXTwitter size={28}/>
            </NavLink>
            <NavLink style={{ color: 'white', cursor: 'pointer' }} to=''>
              <FaInstagram size={28}/>
            </NavLink>
            <NavLink style={{ color: 'white', cursor: 'pointer' }} to=''>
              <FaYoutube size={28}/>
            </NavLink>
          </div>
          <div style={{ display: 'flex', marginTop: '100px', color: 'grey',  alignItems: 'center',gap: '16px', width: '100%'}}>
            <NavLink style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} to=''>
              <h3>Privacy Policy</h3>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'white', cursor: 'pointer'  }} to=''>
              <h3>Terms of Service</h3>
            </NavLink>
          </div>
          <br/>
        </div>
        <br/>
    </>
  )
}

export default Home
