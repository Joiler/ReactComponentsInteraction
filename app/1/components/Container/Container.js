import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple"
        };
    }

    onComponentClick(){
        const tempColor = this.state.leftColumnColor;
        this.setState({
            leftColumnColor: this.state.rightColumnColor,
            rightColumnColor: tempColor
        });
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn color={this.state.leftColumnColor} />
                <RightColumn color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;