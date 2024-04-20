import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './screens/HomeScreen';

describe('HomeScreen component', () => {
  test('renders header with correct left and right views', () => {
    const {getByText, getByTestId} = render(<HomeScreen />);

    // Check if left and right views are rendered
    expect(getByTestId('left-header-view')).toBeTruthy();
    expect(getByTestId('right-header-view')).toBeTruthy();

    // Check if the text "Colombo, Sri Lanka" is rendered
    expect(getByText('Colombo, Sri Lanka')).toBeTruthy();
  });

  test('safe area insets are handled correctly', () => {
    const {container} = render(<HomeScreen />);

    // Check if the component adjusts to safe area insets
    expect(container).toHaveStyle({
      paddingTop: expect.any(Number),
      paddingBottom: expect.any(Number),
    });
  });

  test('volunteer types chips are displayed correctly', () => {
    const {getAllByText} = render(<HomeScreen />);

    // Check if all volunteer types chips are displayed
    expect(
      getAllByText(/Discovery|Animal Rescue|Arts|Children|Disaster/),
    ).toHaveLength(5);
  });
});
