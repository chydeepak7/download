import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions'
function ProfileName() {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }
  return (
    <div>
        {userInfo ? (
            <NavDropdown title={userInfo.name} className='profile'>

            <LinkContainer to='/files' >
                <NavDropdown.Item ><div className='profile_style'>Files</div></NavDropdown.Item>
                   
            </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
        ) : (
            <LinkContainer to='/login' className='profile'>
                <NavDropdown.Item><div className='profile_style'>Login</div></NavDropdown.Item>
                   
            </LinkContainer>
        )}
    </div>
  )
}

export default ProfileName