import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const LandingPage = (props) => {
    return (
      <div className="LandingPage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <footer className='header-footer'>
            2019 Ommies by Valerie Komova
        </footer>
      </div>
    );
  
  };
  
  export default LandingPage;