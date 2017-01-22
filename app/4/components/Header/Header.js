import React, { PropTypes } from 'react';
import styles from './Header.less';

class Header extends React.Component {
    static propTypes  = {
        color: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.header}>
                Header
            </div>
        );
    }
}

export default Header;