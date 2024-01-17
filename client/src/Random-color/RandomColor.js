import React, { useState } from 'react';

const RandomColor = () => {
    const [typeofcolor, setTypeofcolor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomGenerate = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleHexColor = () => {
        const hexarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexcolor = '#';
        for (let i = 0; i < 6; i++) {
            hexcolor += hexarr[randomGenerate(hexarr.length)];
        }

        console.log(hexcolor);
        setColor(hexcolor);
    };

    const handleRgbColor = () => {
        const r = randomGenerate(256);
        const g = randomGenerate(256);
        const b = randomGenerate(256);
        const rgbColor = `${r}, ${g}, ${b}`;
        setColor(rgbColor);
        document.body.style.background = `rgb(${rgbColor})`;
    };

    return (
        <div style={{ height: '100vh', width: '100vw', background: color }}>
            <button onClick={() => setTypeofcolor('hex')} style={{ margin: '10px', padding: '10px', fontSize: '18px', background: '#3498db', color: '#ffffff', border: 'none', cursor: 'pointer' }}>Hex Color</button>
            <button onClick={() => setTypeofcolor('rgb')} style={{ margin: '10px', padding: '10px', fontSize: '18px', background: '#3498db', color: '#ffffff', border: 'none', cursor: 'pointer' }}>RGB Color</button>
            <button onClick={typeofcolor === 'hex' ? handleHexColor : handleRgbColor} style={{ margin: '10px', padding: '10px', fontSize: '18px', background: '#3498db', color: '#ffffff', border: 'none', cursor: 'pointer' }}>Random Color</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontSize: '50px', marginTop: '50px' }}>
                <h3>{typeofcolor === 'rgb' ? 'RGB color' : 'Hex color'}</h3>
                <h2>{color}</h2>
            </div>
        </div>
    );
};

export default RandomColor;
