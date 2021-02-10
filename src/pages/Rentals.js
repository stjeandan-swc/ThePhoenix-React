import React from 'react';

// Components
import Construction from '../components/Construction';
import Nav from '../components/Nav';

// animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const Rentals = () => {

    return(
        <>
            <Nav />
            <motion.div variants={pageAnim} initial='hidden' animate='show' exit='exit'>
                <Construction title='Membership' />
            </motion.div>
        </>
    );
};

export default Rentals;