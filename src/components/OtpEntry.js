import React, { useState } from 'react';
import './OtpEntry.css';
import { useNavigate } from 'react-router-dom';

export const OtpEntry = ({ toggleSignup }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate()

  const otpHandler = () => {
    if (!otp || otp.join('').length !== 6) {
      alert('Enter a valid 6-digit OTP');
    }
    else {
      navigate('/restaurant-list')
    }

  };

  const handleOtpChange = (index, value) => {

    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);


      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const backHandler = () => {
    toggleSignup();
  }

  return (
    <>

      <div className='main-container'>
        <form className='sign-otp-container'>
          <button className='back-button' onClick={backHandler}>{`<`}</button>
          <div className='heading1'>OTP Verification</div>
          <div className='heading2'>Enter the verification code we just sent you</div>
          <div className='box-ui'>
            {otp.map((digit, index) => (
              <input
                className='otp-inp'
                key={index}
                type='text'
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                id={`otp-input-${index}`}
              />
            ))}
          </div>
          <button type="button" className='btn-verify' onClick={otpHandler}>Verify</button>
          <div className='text'>
            Didn't receive the code? <a className='resend-link' href='#'>Resend</a>
          </div>
        </form>
      </div>

    </>
  );
};
