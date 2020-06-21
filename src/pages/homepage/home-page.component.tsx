import React, { FC } from 'react';

import Directory from '../../components/directory/directory.component';
import SECTION_DATA, { Section } from './section.data';

const HomePage: FC = () => {
    const sections: Array<Section> = SECTION_DATA;
    return (
        <div className="homepage">
            <Directory sections={sections} />
        </div>
    );
};

export default HomePage;
