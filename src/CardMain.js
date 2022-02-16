import React from 'react';
import "./style.css";
import eth from './images/image-equilibrium.jpg';




const CardMain = () => {
    return(
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
                        <div>
                        
                        </div>
                        <div>
                            <p>ddd</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMain;