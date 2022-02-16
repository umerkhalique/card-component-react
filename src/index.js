import React from 'react';
import ReactDOM from 'react-dom';
import CardMain from './CardMain';

const App = () => {
    return (
        <CardMain/>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);