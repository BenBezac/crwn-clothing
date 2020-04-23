import React, { Component } from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import SECTION_DATA from '../../pages/home/SECTION_DATA';

class Directory extends Component {
    state = {
        sections: SECTION_DATA,
    };

    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
