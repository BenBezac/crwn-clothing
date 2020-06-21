import React, { FC } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { Section } from '../../pages/homepage/section.data';

interface DirectoryProps {
    sections: Array<Section>;
}

const Directory: FC<DirectoryProps> = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map((section) => (
                <MenuItem key={section.id} {...section} />
            ))}
        </div>
    );
};

export default Directory;
