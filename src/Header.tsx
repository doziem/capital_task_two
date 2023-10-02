import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <p className="opportunity">Opportunity Overview</p>
      <div className="header__right">
        <select className="internship">
          <option>london intership Program</option>
        </select>
        <div className="internship-date">
          <img
            src={require('./images/Calendar_Days.png')}
            alt="home Icon"
            width={'14px'}
            height={'14px'}
            className="homeIcon"
          />
          <select className="internship">
            <option>01 Jan 2023 - 31 July 2023</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
