/**/
import useOnlineStatus from '../hooks/useOnlineStatus.tsx'
/* import AnimeRollingGlow from '../animeanimations/AnimeRollingGlow' */

const LoadingPage = () => {
  const isOnline  = useOnlineStatus()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <h1>
        {
          isOnline
          ? 'Online'
          : 'Offline' /* AnimeRollingGlow */
        }
      </h1>
    </div>
  )
}

export default LoadingPage
