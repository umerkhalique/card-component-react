import React from 'react';
import "./style.css";
import eth from './images/image-equilibrium.jpg';
import eth1 from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import bio from './images/image-avatar.png';

const CardMain = () => {
    return (
        <div className="main-div">
            <div className="card">
                <div className="img">
                    <div className="img-div-root"><img src={eth} /></div>
                </div>
                <div className="content">
                    <div>
                        <h1>Equilibrium #3429</h1>
                    </div>
                    <div>
                        <p>Our Equilibrium collection promotes balance and calm.</p>
                    </div>
                    <div className="content2">
                        <div className="svgdiv">
                            <img className="svg" src={eth1}></img>
                            <p className="svgp">0.041 ETH</p>
                        </div>
                        <div className="clockdiv">
                            <img className="clock" src={clock}></img>
                            <p className="clockp">3 days left</p>
                        </div>
                    </div>
                    <div>
                        <hr className="divider"></hr>
                    </div>
                    <div className="divvv">
                        <div className="imgdivv">
                            <img src={bio} className="imgg"></img>
                        </div>
                        <div className="content3">
                            <div>
                                <p>Creation of</p>
                            </div>
                            <div>
                                <p className="text">Jules Wyvern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMain;