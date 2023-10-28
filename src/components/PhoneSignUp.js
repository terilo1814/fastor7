import React, { useState } from 'react';
import './PhoneSignUp.css';


export const PhoneSignUp = ({ toggleSignup }) => {
    const [mobileNo, setMobileNo] = useState('');

    const mobileHandler = () => {
        if (!mobileNo || mobileNo.length !== 10) {
            alert('Enter a valid 10-digit mobile number');
        }
        else {
            toggleSignup();
        }
    };

    return (
        <>

            <div className='main-container'>
                <form className='sign-otp-container'>
                    <div className='heading1'>Enter Your Mobile Number</div>
                    <div className='heading2'>We will send you the 6-digit verification code</div>
                    <input className='mobile-inp'
                        type="tel"
                        placeholder="Enter the mobile number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                    />
                    <button type="button" className="btn-send" onClick={mobileHandler}>
                        Send Code
                    </button>
                </form>
            </div>
        </>
    );
};
