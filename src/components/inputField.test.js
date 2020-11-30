import React, { useState } from 'react';
import { render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import MyInput from './inputField';

function InputWithState(props) {
    const [value, setValue] = useState("");

    return (<MyInput field={props.field} state={value} setState={setValue} />)
}

const setup = () => {
    var field = 'test input'

    const utils = render(<InputWithState field={field} />)
    const input = utils.getByLabelText(field)
    return {
      input,
      ...utils,
    }
  }


test('It should add a \' \' to the input', () => {
    //Arrange
    const { input } = setup()
    const inputValue = 'test';
    const expected = ' test';

    //Act
    fireEvent.change(input, { target: { value: inputValue } })

    //Assert
    expect(input.value).toBe(expected);
});

test('It should remove all spaces', () => {
    //Arrange
    const { input } = setup()
    const inputValue = 't e s t';
    const expected = ' test';

    //Act
    fireEvent.change(input, { target: { value: inputValue } })

    //Assert
    expect(input.value).toBe(expected);
});

test('It should replace all caps', () => {
    //Arrange
    const { input } = setup()
    const inputValue = 'TEST';
    const expected = ' test';

    //Act
    fireEvent.change(input, { target: { value: inputValue } })

    //Assert
    expect(input.value).toBe(expected);
});