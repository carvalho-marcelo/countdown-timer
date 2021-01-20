import React, { useEffect, useState } from 'react';
import moment from 'moment';
import SVGCircle from './SVGCircle';

export interface props {
    finalDate: string;
    dateFormat: string;
}

const Countdown: React.FC<props> = (props: props) => {

    const [days, setDays] = useState<string>();
    const [hours, setHours] = useState<string>();
    const [minutes, setMinutes] = useState<string>();
    const [seconds, setSeconds] = useState<string>();

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    useEffect(() => {
        setInterval(() => {
            const then = moment(props.finalDate, props.dateFormat);
            const now = moment();
            const countdown = moment(Number(then) - Number(now));

            setDays(countdown.format('D'));
            setHours(countdown.format('HH'));
            setMinutes(countdown.format('mm'));
            setSeconds(countdown.format('ss'));

        }, 1000)
    }, [props.finalDate, props.dateFormat]);

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