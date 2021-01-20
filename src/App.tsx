import React from 'react';
import Countdown from './components/Countdown';
import './App.css'

const App: React.FC = () => {
    return (
        <>
            <Countdown finalDate="2021-03-26T12:00:00" />
        </>
    );
}

export default App;