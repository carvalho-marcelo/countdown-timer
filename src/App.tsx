import React from 'react';
import Countdown from './components/Countdown';
import './App.css'

const App: React.FC = () => {
    return (
        <>
            <Countdown finalDate="03 26 2021, 12:00 am" dateFormat="MM DD YYYY, h:mm a" />
        </>
    );
}

export default App;