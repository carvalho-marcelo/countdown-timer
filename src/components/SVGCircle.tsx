import React from 'react';

export interface props {
    radius: any;
}

const SVGCircle: React.FC<props> = (props: props) => {

    function polarToCartesian(centerX: any, centerY: any, radius: any, angleInDegrees: any) {
        let angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    
        return {
            x: Number(centerX + radius * Math.cos(angleInRadians)),
            y: Number(centerY + radius * Math.sin(angleInRadians))
        };
    }
    
    function describeArc(x: any, y: any, radius: any, startAngle: any, endAngle: any) {
        let start = polarToCartesian(x, y, radius, endAngle | 0);
        let end = polarToCartesian(x, y, radius, startAngle | 0);
    
        let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        let d = [
            'M',
            start.x,
            start.y,
            'A',
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y
        ].join(' ');
    
        return d;
    }
    
    return (
        <svg className="countdown-svg">
            <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, props.radius)} />
        </svg>
    );
}

export default SVGCircle;