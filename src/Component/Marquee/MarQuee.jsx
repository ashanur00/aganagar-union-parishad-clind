import React from 'react';
import Marquee from 'react-fast-marquee';

const MarQuee = () => {
    return (
        <div className='mt-10 mb-10'>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default MarQuee;