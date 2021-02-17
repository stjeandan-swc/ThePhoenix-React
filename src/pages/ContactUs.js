import React from 'react';

// Components
import Nav from '../components/Nav';
import Construction from '../components/Construction';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

// animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const ContactUs = () => {

    return(
        <>
            <Nav />
            <motion.div variants={pageAnim} initial='hidden' animate='show' exit='exit'>
                <Construction title='Contact Us' />
            </motion.div>
            <Faq />
            <Footer />
        </>
    );
};

export default ContactUs;