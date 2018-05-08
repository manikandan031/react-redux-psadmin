import React, {PropTypes} from 'react';

class TextInput extends React.Component {
    render(){
        const {name, label, value, placeholder, onChange, errors} = this.props;
        let wrapperClass = "form-group";
        if(errors){
            wrapperClass += " has-error";
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <input type="text" 
                           className="form-control" 
                           name={name}
                           value={value}
                           onChange={onChange}
                           placeholder={placeholder}
                           />
                    {errors && <div className="alert alert-danger">{errors}</div>}
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    errors: PropTypes.string
};

export default TextInput;