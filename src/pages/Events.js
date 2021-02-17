import React from 'react';

// Components
import Construction from '../components/Construction';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const Events = () => {

    return(
        <>
            <Nav />
            <motion.div variants={pageAnim} initial='hidden' animate='show' exit='exit'>
                <Construction title='Events' />
            </motion.div>
            <Footer />
        </>
    );
};

export default Events;