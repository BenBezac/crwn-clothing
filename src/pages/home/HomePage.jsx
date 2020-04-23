import React from 'react';
import './Homepage.scss';
import Directory from '../../components/Directory/Directory';
import SECTION_DATA from "./SECTION_DATA";

const HomePage = () => {
    const sections = SECTION_DATA;
    return (
        <div className="homepage">
            <Directory sections={sections}/>
        </div>
    );
};

export default HomePage;
