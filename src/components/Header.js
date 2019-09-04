import React from 'react';
import MaqFlexLogo from '../assets/maqflexlogo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={MaqFlexLogo} alt="Logo MaqFlex" />
          </Link>
        </div>
      </header>
    </>
  );
}