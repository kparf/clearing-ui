import React from 'react';
import './label.css';

function label (WrappedComponent) {
    return class Label extends React.Component {
        render() {
            return (
                <label className='label'>
                    {this.props.label}
                    <WrappedComponent {...this.props} />
                </label>
            )
        }
    }
}

export default label;
