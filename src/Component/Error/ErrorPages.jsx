import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const ErrorPages = () => {
    return (
        <div>
            <Link to={'/'}>
            <div>
                <DotLottieReact
                    src="https://lottie.host/e77417a8-b8ee-4b68-81b3-226085ecaf93/XwSW4w9jdT.lottie"
                    loop
                    autoplay
                    style ={{width: '100%', height: '100vh', margin: ' auto',
                    }}

                />
            </div>
                
            </Link>
        </div>
    );
};

export default ErrorPages;