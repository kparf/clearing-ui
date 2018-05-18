import React from 'react';
import './multi-select.css';
import Button from '../button/button';

const ITEM_CLASS_NAME = 'multi-select__list-item';

class MultiSelect extends React.Component {

    constructor(props) {
        super(props);
        const value = this.getSelectedItems(props.children)
        this.state = {
            value,
            input: this.formatValue(value)
        };
    };

    getSelectedItems = (children) => {
        return children.filter(child => child.props.selected)
                            .reduce((map, child) => {
                                 return map.set(child.props.value, child.props.children);
                             }, new Map());
    };

    formatValue = (value) => {
        return [...value.values()].join(', ')
    };

    saveHandler = (event) => {
        console.log(event);
        const { onSave } = this.props;
        this.setState({
            input: this.formatValue(this.state.value)
        });
        event.target.blur();

        if (onSave) {
            onSave([...this.state.value.keys()])
        }
    };

    selectItemHandler = (event) => {
        if (event.target.classList.contains(ITEM_CLASS_NAME)) {

            const value = event.target.dataset.value;
            const selected = event.target.dataset.selected === 'true';
            const label = event.target.textContent;
            const selectedMap = new Map(this.state.value);

            if (selected) {
                selectedMap.delete(value);
            } else {
                selectedMap.set(value, label);
            }
            this.setState({
                value: selectedMap
            });
        }
    };

    render() {
        return (
            <div tabIndex={0} className='multi-select'>

                <input className='multi-select__input'
                       autoFocus={false}
                       type='text'
                       readOnly={true}
                       value={this.state.input}
                />

                <ul className='multi-select__list' onClick={this.selectItemHandler}>
                    { this.props.children }
                    <li>
                        <Button
                            className='multi-select__save-button'
                            onClick={this.saveHandler}>SAVE</Button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MultiSelect;
