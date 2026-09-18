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
      }}
    >
      <h1>
        {
          isOnline
          ? 'Online'
          : 'Offline' /* AnimeRollingGlow */
        }
        <SaveButton/>
      </h1>
    </div>
  )
}

const SaveButton = () => {
  const isOnline  = useOnlineStatus()

  return (
    <button disabled={ !isOnline } onClick={ saveButton } >
      LoadingPage
    </button>
  )
}

export default  LoadingPage
