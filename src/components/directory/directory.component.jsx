import React, { Component } from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

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
