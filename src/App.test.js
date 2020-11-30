import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App';

const setup = () => {
    const app = render(<App/>)
    const inputOne = app.getByLabelText("First");
    const inputTwo = app.getByLabelText("Second");
    const inputThree = app.getByLabelText("Third");
    return {
      inputOne,
      inputTwo,
      inputThree,
      ...app,
    }
  }


test('It should show merged text on screen', () => {
    //Arrange
    const { inputOne,inputTwo,inputThree } = setup();
    const expected = "test one two!";

    //Act
    fireEvent.change(inputOne, { target: { value: 'test' } })
    fireEvent.change(inputTwo, { target: { value: 'one' } })
    fireEvent.change(inputThree, { target: { value: 'two!' } })
    fireEvent.click(screen.getByText(/Merge/i))

    //Assert
    expect(screen.getByLabelText('result')).toHaveTextContent(expected);
});
