import React, {PropTypes} from 'react';

class SelectInput extends React.Component {
    render(){
        const {name, options, defaultOption, label, onChange, errors} = this.props;
        let wrapperClass = "form-group";
        
        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <select name={name} onChange={onChange} className="form-control">
                        <option value="">{defaultOption}</option>
                        {options.map(opt => {
                             return <option key={opt.value} value={opt.value}>{opt.text}</option>;   
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
}

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.string
};

export default SelectInput;