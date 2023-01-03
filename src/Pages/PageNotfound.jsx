import React from 'react';
import { Helmet } from 'react-helmet';

const PageNotfound = () => {
    return (
        <div className='page404'>
            <Helmet>
                     <title>Todocom | 404</title>
                </Helmet>
            <div className="number">404</div>
            <div className="text">
                <span>Ooops...</span> <br />
                <p>page not found</p>
            </div>
        </div>
    );
}

export default PageNotfound;
