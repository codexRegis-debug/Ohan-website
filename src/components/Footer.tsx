/**/
import { NavLink } from 'react-router-dom';
import useOnlineStatus from '@/hooks/useOnlineStatus';

export const Footer = ({
  span,
  link,
  linkText ,
} : {
  span: string,
  link: string,
  linkText: string,
}) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <span style={{color: 'white'}}>
          { span }
          {'  '}
          <span>
            <NavLink className="SignInLink" to={ link } style={{ cursor: 'pointer', color: 'indigo', textDecoration: 'none' }}>
              { linkText }
            </NavLink>
          </span>
        </span>
      </div>
    </>
  )
}

export const ExtraFooter = ({ loadText }:{ loadText: string }) => {
  const isOnline = useOnlineStatus()
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>

      {isOnline
        ?(
          <NavLink className="Loading" to="/load-in" style={{ textDecoration: 'none', color: 'white' }}>
            { loadText }
          </NavLink>
        )
        : (<h3>Internet connection lost</h3>)
      }

    </div>
  )
}
