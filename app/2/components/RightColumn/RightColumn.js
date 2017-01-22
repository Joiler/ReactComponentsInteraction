import React, { PropTypes } from 'react';
import styles from './RightColumn.less';

class RightColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
    }

    onColorChange(newColor){
        this.setState({
            color: newColor
        });
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;