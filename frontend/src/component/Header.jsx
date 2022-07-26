import React from 'react'
import {FaSignInAlt , FaSignOutAlt , FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { reset , logout} from '../features/auth/authSlice'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user , isLoading} = useSelector(state => state.auth)

    const handleClick = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
   <header className='header'>
    <div className="logo">
        <Link to='/'>Support Desk</Link>
    </div>
    <ul>
        { user ? (
            <button className='btn' onClick={handleClick}>
                <FaSignOutAlt/> Signout
            </button>
        ) : (<> <li>
            <Link to= '/login'> <FaSignInAlt/> Sign In</Link>
        </li>
        <li>
            <Link to='/register'><FaUser/> Register</Link>
        </li> </>)}
    </ul>

   </header>
  )
}

export default Header