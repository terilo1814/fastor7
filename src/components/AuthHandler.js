import React, { useState } from 'react'
import { PhoneSignUp } from './PhoneSignUp';
import { OtpEntry } from './OtpEntry';
import './AuthHandler.css';

export const AuthHandler = () => {
  const [showOtpScreen, setShowOtpScreen] = useState(false);

  const toggleSignup = () => {
    setShowOtpScreen(!showOtpScreen);
  };

  return (
    <div className="auth-container">
      <div className={`login-container`}>
        <PhoneSignUp toggleSignup={toggleSignup} />
      </div>
      {<div className={`signup-container ${showOtpScreen ? `slide-in` : `slide-out`}`}>
        <OtpEntry toggleSignup={toggleSignup} />
      </div>}
    </div>
  );
}
