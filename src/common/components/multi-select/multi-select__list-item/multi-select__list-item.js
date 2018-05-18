import React from 'react';
import './multi-select__list-item.css';


class MultiSelect__ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        };
    }

    selectHandler = (event) => {
        this.setState({
            selected: !this.state.selected
        });
    };

    render() {
        const { className = '', value, children, ...otherProps } = this.props;
        return (
            <li data-value={value}
                data-selected={this.state.selected}
                className={`multi-select__list-item ${className}`}
                onClick={ this.selectHandler }
                {...otherProps} >{ children }</li>
        )
    }
}

export default MultiSelect__ListItem;
