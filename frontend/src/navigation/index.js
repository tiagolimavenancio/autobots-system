import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './styles.css';

export default function navigation() {
  return (
    <>      
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <Link to={'/'} className='nav-link'>
              AutoBots
            </Link>
          </Navbar.Brand>
          <div className='nav-right'>
            <Nav>
              <Link to={'/'} className='nav-link'>
                Parts
              </Link>
              <Link to={'/simulations'} className='nav-link'>
                Simulations
              </Link>
            </Nav>
          </div>
        </Navbar>     
    </>
  );
}




