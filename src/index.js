import React from 'react';
import ReactDOM from 'react-dom';
import CardMain from './CardMain';
import Qr from './Qr';

const App = () => {
    return (
        <div>
            <CardMain/>
            <Qr/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);