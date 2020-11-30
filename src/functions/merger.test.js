import '@testing-library/jest-dom/extend-expect'

import merge from './merger';

test('merges array as expected', () => {
    //Arrange
    var array= ['test', 'one', 'two'];
    var expected = 'testonetwo';

    //Act
    var result = merge(array);

    //Assert
    expect(result).toBe(expected);
  });
  