import React from 'react';
import {render} from '@testing-library/react-native';

import {it, describe, expect} from '@jest/globals';

import DetailsScreen from '..';
import data from '../data';

describe('DetailsScreen', () => {
  it('should render Container and Card components', () => {
    const wrapper = render(<DetailsScreen />);

    expect(wrapper.findByTestId('custom-container-id')).toBeDefined();
    expect(wrapper.findByTestId('custom-card-id')).toBeDefined();
  });

  it('should render Text components with correct text', () => {
    const {getByText} = render(<DetailsScreen />);

    expect(getByText('Dependencias')).toBeTruthy();
    expect(getByText('Las dependencias más importantes con las que se construyó este proyecto con son:')).toBeTruthy();
    expect(getByText('\u2022 React Navigation')).toBeTruthy();
    expect(getByText('\u2022 Axios')).toBeTruthy();
    expect(getByText('\u2022 Jotai')).toBeTruthy();
    expect(getByText('\u2022 Nativewind')).toBeTruthy();
    expect(getByText('\u2022 TanStackQuery (React Query)')).toBeTruthy();
    expect(getByText('\u2022 Dayjs')).toBeTruthy();
    expect(getByText('\u2022 React native chart kit')).toBeTruthy();
    expect(getByText('\u2022 React native SVG')).toBeTruthy();
  });

  it('should render FlatList component with correct data and renderItem prop', () => {
    const {getByTestId,getAllByTestId} = render(<DetailsScreen />);
    
    expect(getByTestId('details-list-id')).toBeDefined();
    expect(getByTestId('details-list-id').props.data).toEqual(data);
    expect(getAllByTestId('details-item-component-id')).toBeDefined();
    expect(getAllByTestId('details-item-component-id').length).toEqual(data.length);
  });

  it('should render Container component with the correct props', () => {
    const {getByTestId} = render(<DetailsScreen />);

    expect(getByTestId('custom-container-id').props.children).toBeDefined();
  });

  it('should render Card component with the correct props', () => {
    const {getByTestId} = render(<DetailsScreen />);

    expect(getByTestId('custom-card-id').props.children).toBeDefined();
  });
});
