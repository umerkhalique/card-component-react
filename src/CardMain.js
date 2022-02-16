import React from 'react';
import "./style.css";
import eth from './images/image-equilibrium.jpg';

const CardMain = () => {
    return(
        <div className="main-div">
            <div className="card">
                <div className="img">
                <img src={eth} />
                </div>
                <div className="content">
                    hithere again
                </div>
            </div>
        </div>
    );
};

export default CardMain;