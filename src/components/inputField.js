import React from 'react';


export default function InputField(props) {
    const setValue = props.setState;
    const value = props.state;
    const field = props.field;

    function handeChange(e) {
        var input = e.target.value

        input = input.replace(/ /g,'')
        input = input.toLowerCase();


        var hasSpace = input[0] === ' ';
        if (!hasSpace) {
            input = ' ' + input;
        }

        setValue(input)
    }


    return (
        <label>
            {field}:
            <input aria-label={field} type="text" value={value} onChange={handeChange} />
        </label>
    );
}