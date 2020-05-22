import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import SECTION_DATA from "./section.data";

const HomePage = () => {
    const sections = SECTION_DATA;
    return (
        <div className="homepage">
            <Directory sections={sections}/>
        </div>
    );
};

export default HomePage;
