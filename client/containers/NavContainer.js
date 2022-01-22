import React, { useEffect } from 'react';
import { getUserId, logout } from '../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavContainer = () => {
  const currentUserId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  // // Dispatch actions on mount
  useEffect(() => {
    dispatch(
      getUserId({
        token: sessionStorage.getItem('token'),
      })
    );
  }, []);

  return (
    <div>
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/dashboard'>
              fitgram
            </a>
            <div className='navbar-nav'>
              <ul className='nav nav-tabs'>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    data-bs-toggle='tab'
                    href={`/profile/${currentUserId}`}
                  >
                    Profile
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    data-bs-toggle='tab'
                    href='/dashboard'
                  >
                    Dashboard
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className='nav-link'
                    data-bs-toggle='tab'
                    href='/message/:id'
                  >
                    Messages
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    data-bs-toggle='tab'
                    href='/'
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default NavContainer;
