import React, { Component } from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends Component {

    render() {
        const { sections } = this.props;
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
