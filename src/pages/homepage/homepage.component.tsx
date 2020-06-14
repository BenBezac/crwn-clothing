import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import SECTION_DATA, {Section} from "./section.data";

const HomePage: React.FC = () => {
    const sections: Array<Section> = SECTION_DATA;
    return (
        <div className="homepage">
            <Directory sections={sections}/>
        </div>
    );
};

export default HomePage;
