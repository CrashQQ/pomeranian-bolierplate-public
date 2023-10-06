import React from 'react';
import './styles/header.css';
import Logo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage';
import { Arrow } from '../Components/Icons/Arrow';
export function AppHeader() {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Logo" />
        <div className="header-menu">
          <img src={settingLogo} alt="SettingLogo" />
          <RoundedImage src={snowWolf} size={{ width: 50, height: 50 }} />

          <p className="studentItem">
            <span className="imieStudent">Adrian</span>
            <span>kursant</span>
          </p>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
