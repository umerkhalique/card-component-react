import React from 'react';
import "./qrstyle.css";
import qrimg from './images/image-qr-code.png'

const Qr = () => {
    return (
        <div className="maindiv">
            <div className="maindivv">
                <div className="img-div-root">
                    <img src={qrimg}>
                    </img>
                </div>
                <div>
                    <h1 className="text1">Improve your front-end skills by building projects</h1>
                </div>
                <div>
                    <p className="text2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    );
    }
export default Qr;