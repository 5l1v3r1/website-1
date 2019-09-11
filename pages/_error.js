import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/error.css';
import Preloader from '../components/preloader';

function Error(props) {
    let { statusCode } = props;
    let errorText = '';

    switch (statusCode) {
        case 404: errorText = 'Oops! That page could not be found!';
            break;

        case 500: errorText = 'Oops! There was some internal server error. Please try later.';
            break;

        default: errorText = 'Oops! Something went wrong.';
            console.log({ statusCode });
            // just to show something to user
            statusCode = 404;
    }

    return (
        <div>
            <Header />
            {/* <Preloader /> */}
            <div className='main-body-content'>
                <section className='pad-75'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 '>
                                <div className='notfound-wrapper pad-100 text-center'>
                                    <h1>{statusCode}</h1>
                                    <p>{errorText}</p>

                                    <div className='d-flex justify-content-center col-sm-12'>
                                        <div className='button-4'>
                                            <div className='eff-4'></div>
                                            <Link href='/' replace={true}>
                                                <a>Back To Home</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
}

Error.proptypes = {
    statusCode: PropTypes.number.isRequired
};

export default Error;
