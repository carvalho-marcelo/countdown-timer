import React, { useEffect, useState } from 'react';
import SVGCircle from './SVGCircle';

export interface props {
    finalDate: string;
}

const Countdown: React.FC<props> = (props: props) => {

    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const daysRadius = mapNumber(Math.abs(days), 365, 0, 0, 360);
    const hoursRadius = mapNumber(Math.abs(hours), 24, 0, 0, 360);
    const minutesRadius = mapNumber(Math.abs(minutes), 60, 0, 0, 360);
    const secondsRadius = mapNumber(Math.abs(seconds), 60, 0, 0, 360);

    useEffect(() => {
        setInterval(() => {
            
            const then = new Date(props.finalDate).getTime();
            const now = new Date().getTime();
            const remaining = then - now;

            setDays(Math.floor(remaining / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((remaining % (1000 * 60)) / 1000));

        }, 1000)
    }, [props.finalDate]);

    function mapNumber(number: any, in_min: any, in_max: any, out_min: any, out_max: any) {
        return (
            ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    }

    return (
        <div>
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                <div className="countdown-item">
                    <SVGCircle radius={ daysRadius } />
                    { days }
                    <span>days</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={ hoursRadius } />
                    { hours }
                    <span>hours</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={ minutesRadius } />
                    { minutes }
                    <span>minutes</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={ secondsRadius } />
                    { seconds }
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;