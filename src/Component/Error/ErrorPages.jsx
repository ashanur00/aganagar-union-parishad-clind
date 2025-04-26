import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const ErrorPages = () => {
    return (
        <div>
            <div>
                <DotLottieReact
                    src="https://lottie.host/e8c83b53-ea99-4e5f-99ad-9787e3401384/HAIXJip4WQ.lottie"
                    loop
                    autoplay

                />
            </div>
            <Link to={'/'}>
                <button className="btn btn-primary md:ml-[500px]">Go back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPages;