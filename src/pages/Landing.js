import React from 'react';
import Faq from '../components/Faq';

import LandingSection from '../components/LandingSection';

const Landing = () => {

    return(
        <div className="landing">
            <LandingSection />
            <Faq />
        </div>
    );
};

export default Landing;